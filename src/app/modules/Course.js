const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
   name: { type: String, required: true },
   description: { type: String, required: true },
   videoId: String,
   image: String,
});

module.exports = mongoose.model('Course', Course);