const PersonModel = require('../models/person.model');

const create = async data => {
    let person = new PersonModel(data);
    return await person.save();
}

const getAll = async () => {
    return await PersonModel.find({});
}

const update = async (id, data) => {
    return await PersonModel.findByIdAndUpdate(id, {
        $set: { ...data }
    })
}

const remove = async id => {
    return await PersonModel.findByIdAndDelete(id);
}

module.exports = {
    create,
    getAll,
    update,
    remove
}