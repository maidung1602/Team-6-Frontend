const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');


router.use('/document', indexController.document);
router.use('/learning', indexController.learning);
router.use('/home', indexController.home);


module.exports = router;