const express = require('express');
const catController = require('./controllers/catController');
//const Router = express.Router;
//const router= Router();
const router = require('express').Router();


router.get('/', (req, res) => {

    res.render('index');
});

router.get('/create', catController.getCreateCat);


module.exports = router;
