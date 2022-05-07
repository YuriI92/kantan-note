const fs = require('fs');
const path = require('path');

function writeData(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
}

function createNewNote(body, notes) {
    notes.push(body);

    writeData(notes);
    return notes;
}

function deleteNote(id, notes) {
    const deletedNotes = notes.filter((note) => note.id !== id);

    writeData(deletedNotes);
    return deletedNotes;
}

module.exports = { createNewNote, deleteNote };
