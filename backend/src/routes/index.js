const express = require('express');
const router = express.Router();

const BASE_URL = '/';

router.get(BASE_URL, (req, res) => {
    res.json({
        message: 'Okay'
    })
})

module.exports = router;