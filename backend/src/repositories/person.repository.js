const PersonModel = require('../models/person.model');

const create = async data => {
    let person = new PersonModel(data);
    return await person.save();
}

const getAll = async () => {
    return await PersonModel.find({});
}

const getAllWithoutFriends = async () => {
    return await PersonModel.find({}, 'name email')
}

const getAllWithFriendEmail =  async () => {
    return await PersonModel.find({})
        .populate('friend', 'name email')
}

const updateById = async (id, data) => {
    return await PersonModel.findByIdAndUpdate(id, {
        $set: { ...data }
    })
}

const removeById = async id => {
    return await PersonModel.findByIdAndDelete(id);
}

module.exports = {
    create,
    getAll,
    getAllWithoutFriends,
    getAllWithFriendEmail,
    updateById,
    removeById
}