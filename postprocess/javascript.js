module.exports = [
  ["/README.md", /YOUR_USERNAME/g, "koding"],
  [
    "/README.md",
    /#### npm(?:\n|.)*####/,
    `\`\`\`shell
  npm install koding-api --save
\`\`\`

####`
  ],
  [
    "/README.md",
    /#### git(?:\n|.)*### For browser/,
    `or

\`\`\`shell
  npm install koding/koding-api --save
\`\`\`

### For browser`
  ],
  [
    "/README.md",
    /```javascript(?:\n|.)*```/,
    `
\`\`\`javascript

  var KodingApi = require("koding-api");

  // Uncomment this line if your koding instance is running on localhost:8090
  // KodingApi.ApiClient.instance.basePath = "http://localhost:8090/remote.api";

  // APITOKEN can be created in Team Dashboard
  const APITOKEN = "YOUR_TOKEN";

  // Following call will return account information if your apitoken is valid
  new KodingApi.JUserApi(APITOKEN)
    .whoami()
    .then(data =>
      console.log(
        \`API called successfully. Returned data: \${JSON.stringify(data, "  ", 2)}\`
      ))
    .catch(error =>
      console.error(
        \`API call failed with error: \${error.message}\`
      ));

\`\`\`
    `
  ],
  [
    "/src/ApiClient.js",
    /name: 'Authorization'/,
    "name: 'Authorization', apiKeyPrefix: 'Bearer'"
  ],
  [
    "/src/*/*Api.js",
    /this\.apiClient = apiClient \|\| ApiClient\.instance;/,
    `
    if (typeof apiClient == 'string') {
      this.apiClient = ApiClient.instance;
      this.apiClient.authentications.Bearer.apiKey = apiClient;
    } else {
      this.apiClient = apiClient || ApiClient.instance;
    }
    `
  ]
];
