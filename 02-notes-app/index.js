const yargs = require("yargs");
const { listNotes, addNote, readNote, removeNote } = require("./notes")

// LIST
yargs.command({
    command: "list",
    description: "to list down all notes",
    handler: function () {
        listNotes()
    }
})

// REMOVE
yargs.command({
    command: "remove",
    description: "to remove one note",
    builder: {
        title: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        removeNote(args.title)
    }
})

// READ
yargs.command({
    command: "read",
    description: "to read one note",
    builder: {
        title: {
            type: "string",
            demandOption: true
        }
    },
    handler: function (args) {
        readNote(args.title)
    }
})

// ADD
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