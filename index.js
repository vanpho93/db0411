const express = require('express');
const bodyParser = require('body-parser');
const Word = require('./db');
const app = express();

app.use(bodyParser.json());

// Doc tat ca tu vung

app.get('/word', (req, res) => {
    // send tat ca cac tu vung hien co
    Word.find({})
    .then(words => res.send(words))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.get('/word/:id', (req, res) => {
    // send tat ca cac tu vung hien co
});

app.post('/word', (req, res) => {
    // Them 1 tu vung
});

app.put('/word', (req, res) => {
    // Update 1 tu vung
});

app.delete('/word/:id', (req, res) => {
    // Xoa 1 tu vung cu the
});

app.listen(3000, () => console.log('Server started'));
