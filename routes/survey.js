const express = require('express');
const router = express.Router();
const { submit } = require('../controllers/surveyControllers/surveySubmittion');

router.get('/', (req, res, next) => {
    res.status(200).send('survey');
});

router.post('/submit', submit)

module.exports = router;