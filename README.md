# koding-api-codegen

Koding API Codegen over Swagger Codegen. This package is intended to generate
client and server code for Koding API with the languages supported by
[Swagger Codegen](https://github.com/swagger-api/swagger-codegen). Due to some
limitations for code generation, this package updates generated code based on
the language specific `postprocess`.

## Getting Started

Clone the repository and do `npm install` as usual, then;

```shell
  node generate.js
```

This will read the `swagger.json` in the same folder and generate `koding-api`
(in JS by default) client code with Swagger's Online Generator on
https://generator.swagger.io

If you need to generate code in golang for example;

```shell
  node generate.js go
```

All generated code will have `koding-api-LANGUAGE` directory.

## Development

If you need to make some manual changes on the generated code, you can use the
`postprocess` feature, which will work per language and you can find the
example one for JavaScript in `postprocess/javascript.js`. Postprocess will
include list of changes;

```javascript
  [
    [ FILEPATH, REGEXP, NEWTEXT ], # Change 1
    [ FILEPATH, REGEXP, NEWTEXT ]  # Change 2
  ]
```

## LICENSE

This repository is licensed under GNU AGPL V3
