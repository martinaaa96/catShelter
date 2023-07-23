const router = require('express').Router();

const Breed = require('../models/Breed');

router.get('/create', (req, res) => {
    res.render('breed/create');


});

router.post('/create', async (req, res) => {
    const nameBreed = req.body;

    await Breed.create({nameBreed});

    res.redirect('/');

});

module.exports = router;