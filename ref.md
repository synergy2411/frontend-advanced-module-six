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
