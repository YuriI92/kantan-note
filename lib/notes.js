const fs = require('fs');
const path = require('path');

// write notes data into db.json file
function writeData(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
}

// create new note and add rewrite notes into db.json file
function createNewNote(body, notes) {
    // push new note to notes array
    notes.push(body);

    writeData(notes);
    return notes;
}

// delete the note selected
function deleteNote(id, notes) {
    // create a new array without a note that does not match with the required id
    const deletedNotes = notes.filter((note) => note.id !== id);

    writeData(deletedNotes);
    return deletedNotes;
}

module.exports = { createNewNote, deleteNote };
