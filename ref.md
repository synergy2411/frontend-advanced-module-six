# NodeJS Installer -

> Node Package Manager (NPM)
> Node Runtime Environment (NRE)
> Node Native/Core Modules

# NodeJS Follows

> CommonJS Module System (default)

    - module.exports
    - require()

> ES Module System (.mjs)

    - import
    - export

# NPM Commands

> npm init - generates package.json file in project folder
> npm install chalk
> npm install yargs

> node index.js --help
> node index.js print --help
> node index.js print --value="any value"

## Create one command named 'read'

- 'read' command should accept 'title' as an option
- 'title' should be mandatory option
- print the title in the console

> node index --help
> node index read --help
> node index read --title="shopping"

> Store the title in test.txt file

- Create 'write' command - NO builder NEEDED
- read the data from test.txt and write it on the console
- print the title in the console

'read' -> accepting input from user and soring in the file (test.txt)

'write' -> read the data from test.txt and write it on the console

## External Modules

## Built-in / Native Modules

## File Module

# Semantic Versioning - X.Y.Z (semver.org)

- X : Major Version > add new features which is NOT backward compatible
- Y : Minor Version > add new features which is backward compatible
- Z : Patch Version > for bug fixes and code improvements

v1.0.0
v1.0.1
v1.1.0
v1.1.1
v2.0.0

> npm init
> npm install chalk@2.2.2
> npm outdated
> npm update
> npm install chalk@latest
> npm install @babel/core -D << install packages as devDependency locally in project
> npm install json-server -g << install packages in global environment of machine
> npm ls --depth 0
> npm search [searchTerm]
> npm config get | set [configuration]

    - set init-author-name="Your_Name"
    - set init-version=0.0.1
    - npm config list --json
    - generate package.json again

> npm adduser << adds you as user on NPM registry
> npm publish << publish the project on NPM registry
> npm unpublish << unpublish the project from NPM registry

## Steps to upload the module

create a module to export the random number (1-100) and publish it;

Verify the package is published (https://registry.npmjs.org/)

create another project to install the package

use the random number functionality

# Dependency : 3rd party packages invloved in development as well in production environment

# DevDependency : 3rd party packages involved in development only; Will be removed automatically in production environment

- npm init -
- npm i @babel/core @babel/cli @babel/preset-env -D
- npm i nodemon -D
- Change the script in package json file
- run the script > npm run dev:start

# Webpack DEMO

- npm init -y
- npm install webpack webpack-cli -D
- npm install @babel/core @babel/cli @babel/preset-env -D
- src/index.js
- webpack.config.js file -> configuration
- create "build" script in package json file
- run the script > npm run build

## Configuing webpack-dev-server

- live-server : 5500 | webpack-dev-server : 8080
- npm install webpack-dev-server -D
- npm install html-webpack-plugin -D
- Configure "plugins" in webpack.config.js file
- create new script "dev-serve"
- run the script > npm run dev-serve

## to load CSS as module

- npm install style-loader css-loader -D
- configure webpack-config.js file
- import css file in javascript

## to load babel config

- npm install babel-loader -D [@babel/core, @babel/cli, @babel/preset-env]
- configure webpack-config.js file
- import JS file in javascript
