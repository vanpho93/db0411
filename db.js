const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/rn0411', { useMongoClient: true });

const wordSchema = new Schema({
    vn: { type: String, required: true, trim: true },
    en: { type: String, required: true, trim: true, unique: true },
    isMemorized: { type: Boolean, default: false, required: true }
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
