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

const readNote = (title) => {
    const notes = loadNotes();
    const position = notes.findIndex(n => n.title === title)
    if (position >= 0) {
        console.log("TITLE : ", notes[position].title)
        console.log("BODY : ", notes[position].body)
        return;
    }
    console.log("Unable to find Note for title -", title);
}

const removeNote = title => {
    const notes = loadNotes();
    const position = notes.findIndex(n => n.title === title)
    if (position >= 0) {
        // const filteredNotes = notes.filter(n => n.title !== title);
        // saveNote(filteredNotes)
        notes.splice(position, 1)
        saveNote(notes)
        return;
    }
    console.log(("Unable to find title - " + title).red);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log("LISTING ALL NOTES".grey);
    notes.forEach(note => {
        console.log("-------------".blue);
        console.log(("Title : " + note.title).grey);
        console.log(("Body : " + note.body).grey);
    })
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    listNotes
}