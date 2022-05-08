const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid'); // npm package to create random id
const { createNewNote, deleteNote } = require('../lib/notes');
const { readFile } = require('fs/promises');

// gets all the notes from json file
router.get('/notes', async (req, res) => {
    let data = await readFile('./db/db.json','utf-8');
    res.json(JSON.parse(data));
});

// add new note to the notes and rewrite the json file
router.post('/notes', async (req, res) => {
    let data = await readFile('./db/db.json','utf-8');
    // create random id
    req.body.id = nanoid();
    res.json(createNewNote(req.body, JSON.parse(data)));
});

// delete note from the notes and rewrite the json file
router.delete('/notes/:id', async (req, res) => {
    let data = await readFile('./db/db.json','utf-8');
    res.json(deleteNote(req.params.id, JSON.parse(data)));
});

module.exports = router;
