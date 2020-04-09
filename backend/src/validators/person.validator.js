const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty()
        .trim()
        .withMessage('must does not be empty'),
    body('email')
        .notEmpty()
        .isEmail()
        .withMessage('must be a valid email'),
];