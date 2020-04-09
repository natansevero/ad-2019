const express = require('express')
const router = express.Router();
const personValidatior = require('./../../validators/person.validator');
const PersonController = require('./../../controllers/person.controller');

const BASE_URL = '/api/v1/people';

router.post(BASE_URL, personValidatior, PersonController.create);

module.exports = router;