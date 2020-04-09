const PersonModel = require('../models/person.model');

const create = async data => {
    let person = new PersonModel(data);
    return await person.save();
}

module.exports = {
    create,
}