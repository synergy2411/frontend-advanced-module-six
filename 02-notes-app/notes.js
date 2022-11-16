const fs = require("fs");
require("colors");

const loadNotes = () => {
    try {
        const content = fs.readFileSync("./data.json")
        const strContent = content.toString()
        return JSON.parse(strContent)
    } catch (err) {
        return [];
    }
}

const saveNote = (notes) => {
    fs.writeFileSync("./data.json", JSON.stringify(notes))
    console.log("Notes Updated".green);
}

const addNote = (title, body) => {
    let note = { title, body };
    let notes = loadNotes();
    const position = notes.findIndex(n => n.title === title)
    if (position >= 0) {
        return console.log("Duplicate Title. Try Again!".red);
    }
    notes.push(note);
    saveNote(notes);
}

module.exports = {
    addNote
}