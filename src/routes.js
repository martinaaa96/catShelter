const express = require('express');
const catController = require('./controllers/catController');
//const Router = express.Router;
//const router= Router();
const homeController = require('./controllers/homeController');

const router = require('express').Router();

router.get('/', homeController.getHomePage);

router.get('/404',homeController.getErrorPage);

router.get('/create', catController.getCreateCat);
router.post('/create', catController.postCreateCat);

router.get('/details/:catId',catController.getDetails);

module.exports = router;
