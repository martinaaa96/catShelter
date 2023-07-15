const express = require('express');
const catController = require('./controllers/catController');
//const Router = express.Router;
//const router= Router();
const homeController = require('./controllers/homeController')
const router = require('express').Router();

router.get('/', homeController.getHomePage);
router.get('/create', catController.getCreateCat);

router.post('/create', catController.postCreateCat)
module.exports = router;
