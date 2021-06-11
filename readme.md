# Generating a NPM Package by Scratch

## Generate the package

```
npm init
```

In package.json add these files:
```json
  "types":"lib/index.d.ts",
  "main": "lib/index.js",
  "scripts": {
    "build-ts": "tsc -d -p . ",
    "build": "npm run build-ts",
    "prepublish": "npm run build-ts"
  },
```

**Pay attention to:**
* **name**: should be unique and will be the same of the package generated on the web
* **version**: this is used for mapping the version in the package repository
* **main**: should be the main program called by the program
* **types**: will be used by typescript object mapping



## Import the default package for typescript:

```
npm i -D @types/node typescript 
```

## tsconfig.json

Create a `tsconfig.json` the most important thing is that have the `"outDir": "lib"` compiler options
```json
{
    "compilerOptions": {
        "target": "ES2017",
        "module": "commonjs",
        "lib": [
            "dom",
            "es2017"
        ],
        "rootDir": "src",
        "outDir": "lib",
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "forceConsistentCasingInFileNames": true,
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "removeComments": true,
        "strict": true,
        "sourceMap": true,
        "typeRoots": [
            "src/@types",
            "node-modules/@types"
        ],
        "types": [
            "node"
        ]
    }

}
```

## Exporting

Create your class as always:
* `src/Sum.ts`
* `src/Ciao.ts`

create a `scr/index.ts` file with this syntax:
```typescript
import Sum from "./Sum"; 
//module.exports.Sum = Sum;

import Ciao from "./Ciao"; 
//module.exports.Ciao = Ciao;

export { Ciao, Sum };
```

## Generate the package:

[Reference](http://npm.github.io/publishing-pkgs-docs/index.html)

Remember to generate the file `.npmignore` for exclude the files not necessary [See NPM](http://npm.github.io/publishing-pkgs-docs/publishing/the-npmignore-file.html)

If necessary generate a file `.npmregistry` for use a private registry:
```
registry=https://<npmregistry>.westeurope.cloudapp.azure.com
```

Launch `npm publish` for publish the package 
* [See NPM]([http://npm.github.io/publishing-pkgs-docs/publishing/the-npm-publish-command.html)


## Use the package

For use the package in local it is possible to import using the command:
```json
  "dependencies": {
    "npm_repo_example": "file:../npm_repo_example"
  },
```
