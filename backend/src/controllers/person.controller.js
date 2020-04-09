const PersonRepository = require('../repositories/person.repository');
const { validationResult } = require('express-validator');

const create = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const { name, email } = req.body;

    try {
        await PersonRepository.create({
            name,
            email
        });

        res.status(201).json({ message: 'Person created with success!' });
    } catch(err) {
        res.status(500).json({
            message: 'Failed to process the request'
        })
    }
}

module.exports = {
    create,
}