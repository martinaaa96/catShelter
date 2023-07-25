const router = require('express').Router();

const Breed = require('../models/Breed');

router.get('/create', (req, res) => {
    res.render('breed/create');


});

router.post('/create', async (req, res) => {
    const {breed}  =  Object.assign({},req.body)
   // let breed = req.body.breed;
console.log( Object.assign({},req.body.breed))
    let newBreed = new Breed({breed,description});
console.log(newBreed)
    await newBreed.save();

    res.redirect('/')

});

module.exports = router;