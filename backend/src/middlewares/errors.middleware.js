const { validationResult } = require('express-validator');

const errorsMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    return next();
}

module.exports = errorsMiddleware;