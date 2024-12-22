const express = require('express');
const formController = require('../controllers/formController');
const router = express.Router();

router.post('/submit-question', formController.submitForm);

module.exports = router;