const express = require('express');
const router = express.Router();

const indexController = require('../controllers/learningController');


router.use('/lesson', indexController.lesson);
router.use('/end', indexController.end);
router.use('/', indexController.learning);


module.exports = router;