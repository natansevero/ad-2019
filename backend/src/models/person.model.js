const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    friend: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' }
});

module.exports = mongoose.model('Person', PersonSchema);