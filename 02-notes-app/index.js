const yargs = require("yargs");
const { addNote } = require("./notes")

yargs.command({
    command: "add",
    description: "to add new note",
    builder: {
        title: {
            type: "string",
            demandOption: true
        },
        body: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        addNote(args.title, args.body);
    }
})

yargs.parse();