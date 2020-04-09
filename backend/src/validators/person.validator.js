const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty()
        .trim()
        .withMessage('Name must does not be empty'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('Email must be a valid email'),
];