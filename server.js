const express = require('express');
const path = require('path');
const { nanoid } = require('nanoid');
const { createNewNote, deleteNote } = require('./lib/notes');
const { readFile } = require('fs/promises');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', async (req, res) => {
    let data = await readFile('./db/db.json','utf-8');
    console.log(data);
    res.json(JSON.parse(data));
});

app.post('/api/notes', async (req, res) => {
    let data = await readFile('./db/db.json','utf-8');
    req.body.id = nanoid();
    res.json(createNewNote(req.body, JSON.parse(data)));
});

app.delete('/api/notes/:id', async (req, res) => {
    let data = await readFile('./db/db.json','utf-8');
    res.json(deleteNote(req.params.id, JSON.parse(data)));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});