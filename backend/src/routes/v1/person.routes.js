const express = require('express')
const router = express.Router();

const personValidatior = require('./../../validators/person.validator');
const errorsMiddleware = require('./../../middlewares/errors.middleware')

const PersonController = require('./../../controllers/person.controller');

const BASE_URL = '/api/v1/people';

router.post(BASE_URL, personValidatior, errorsMiddleware, PersonController.create);
router.get(BASE_URL, PersonController.read);
router.put(`${BASE_URL}/:id`, personValidatior, errorsMiddleware, PersonController.update);
router.delete(`${BASE_URL}/:id`, PersonController.remove);

module.exports = router;