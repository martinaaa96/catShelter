const router = require('express').Router();

const Breed = require('../models/Breed');

router.get('/create', (req, res) => {
    res.render('breed/create');


});

router.post('/create', async (req, res) => {
    let breed = req.body;
    let newBreed = new Breed({ breed });
    // let cat = new Cat( {name, description, image,breed} );


    await newBreed.save();

    res.redirect('/')

});

module.exports = router;