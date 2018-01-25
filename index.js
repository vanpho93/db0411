const express = require('express');
const bodyParser = require('body-parser');
const Word = require('./db');
const app = express();

app.use(bodyParser.json());

app.get('/word', (req, res) => {
    Word.find({})
    .then(words => res.send({ isSuccess: true, words }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.get('/word/:id', (req, res) => {
    const { id } = req.params;
    Word.findById(id)
    .then(word => {
        if (!word) throw new Error('Cannot find word.');
        res.send({ isSuccess: true, word });
    })
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.post('/word', (req, res) => {
    const { en, vn } = req.body;
    const word = new Word({ en, vn });
    word.save()
    .then(word => res.send({ isSuccess: true, word }))
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.put('/word/:_id', (req, res) => {
    const { en, vn, isMemorized } = req.body;
    Word.findByIdAndUpdate(req.params._id, { en, vn, isMemorized })
    .then(word => {
        if (!word) throw new Error('Cannot find word.');
        res.send({ isSuccess: true, word });
    })
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.delete('/word/:id', (req, res) => {
    const { id } = req.params;
    Word.findByIdAndRemove(id)
    .then(word => {
        if (!word) throw new Error('Cannot find word.');
        res.send({ isSuccess: true, word });
    })
    .catch(error => res.status(404).send({
        isSuccess: false,
        message: error.message
    }));
});

app.listen(3000, () => console.log('Server started'));
