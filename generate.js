const fs = require("fs");
const path = require("path");
const request = require("request");
const unzip = require("unzip2");
const shell = require("shelljs");

const language = process.argv[2] || "javascript";
const codeType = process.argv[3] || "client";
const codeGenEndpoint = `http://generator.swagger.io/api/gen/${codeType}s`;

const packageName = language == "javascript"
  ? "koding-api"
  : `koding-api-${language}`;

function log(m) {
  console.log(`  ${m}`);
}

function getPostBody(swaggerObj) {
  return {
    spec: swaggerObj,
    options: {
      projectName: packageName,
      usePromises: true,
      emitJSDoc: true,
      apiPackage: packageName,
      projectDescription: "Koding API for integrating your application with Koding services",
      modelPackage: packageName
    }
  };
}

function readSwagger() {
  log("Reading Swagger definition...");
  return new Promise((resolve, reject) =>
    fs.readFile(path.resolve("swagger.json"), "utf8", (error, json) => {
      if (error) {
        reject(error);
      }
      try {
        let obj = JSON.parse(json);
        resolve(obj);
      } catch (err) {
        reject(err);
      }
    }));
}

function generateClient(swaggerObj) {
  log("Generating client...");
  return new Promise((resolve, reject) => {
    let postBody = getPostBody(swaggerObj);

    request.post(
      {
        url: codeGenEndpoint + "/" + language,
        body: JSON.stringify(postBody),
        rejectUnauthorized: false,
        headers: {
          "Content-Type": "application/json"
        }
      },
      (error, response, body) => {
        if (error) {
          reject(error);
        }

        if (response.statusCode !== 200) {
          reject(new Error("Response code was not 200. " + body));
        }

        let responseObj;
        try {
          responseObj = JSON.parse(body);
        } catch (err) {
          return reject(err);
        }

        let generateRequest = request({
          url: responseObj.link,
          encoding: null,
          rejectUnauthorized: false
        }).pipe(unzip.Extract({ path: "./" }));

        generateRequest.on("close", resolve);
      }
    );
  });
}

function backupCurrentApi() {
  log("Backing up current API...");
  return new Promise((resolve, reject) => {
    shell.rm("-rf", language + "-client");
    shell.mv(packageName, packageName + ".current");
    resolve();
  });
}

function deprecateCurrentApi() {
  log("Deprecating old API...");
  return new Promise((resolve, reject) => {
    shell.mv(language + "-client", packageName);
    shell.rm("-rf", packageName + ".current");
    resolve();
  });
}

function postProcess() {
  log("Running post process...");

  return new Promise((resolve, reject) => {
    let changes;

    try {
      changes = require(`./postprocess/${language}`);
    } catch (err) {
      return resolve();
    }

    log(`Found ${changes.length} modification for ${language}, applying...`);

    let updateFile = file => {
      log(`--> ${file}`);
      fs.writeFileSync(
        file,
        fs.readFileSync(file).toString().replace(pattern, change)
      );
    };

    for (let _change of changes) {
      var [glob, pattern, change] = _change;
      shell.ls(`./${packageName}${glob}`).forEach(updateFile);
    }

    resolve();
  });
}

function revertCurrentApi() {
  log("Reverting back current API...");
  shell.mv(packageName + ".current", packageName);
}

function errorHandler(step, error) {
  log("Failed with:", error);
  if (step > 0) {
    revertCurrentApi();
  }
  process.exit();
}

console.log(
  `
  Generating ${packageName} package in ${language} language for ${codeType} side.
  `
);

[
  backupCurrentApi,
  readSwagger,
  generateClient,
  deprecateCurrentApi,
  postProcess,
  _ => log("\n  All done!\n")
].reduce(
  (p, c, i) => p = p.then(c).catch(e => errorHandler(i, e)),
  Promise.resolve()
);
