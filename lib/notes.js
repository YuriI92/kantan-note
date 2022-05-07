const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return notes;
}

function findById(id, notes) {
    const result = notes.filter((note) => note.id !== id);
    return result;
}

module.exports = { createNewNote, findById };
