const fs = require('fs');
const path = require('path');

function writeData(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    console.log(notes);
}

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);

    writeData(notes);
    return notes;
}

function deleteNote(id, notes) {
    const deletedNotes = notes.filter((note) => note.id !== id);

    writeData(deletedNotes);
    return notes;
}

module.exports = { createNewNote, deleteNote };
