const PersonRepository = require('../repositories/person.repository');

const create = async (req, res) => {
    const { name, email } = req.body;

    try {
        const person = await PersonRepository.create({
            name,
            email
        });

        return res.status(201).json(person);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const read = async (req, res) => {
    try {
        const people = await PersonRepository.getAll();

        return res.status(200).json(people);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const update = async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;

    try {
        const person = await PersonRepository.update(id, {
            name,
            email
        })

        if(!person) {
            return res.status(404).json({
                message: 'Person not found'
            });
        }

        return res.status(202).json();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const remove = async (req, res) => {
    const { id } = req.params;

    try {
        const person = await PersonRepository.remove(id);

        if(!person) {
            return res.status(404).json({
                message: 'Person not found'
            });
        }

        return res.status(204).json();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}