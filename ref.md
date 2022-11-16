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