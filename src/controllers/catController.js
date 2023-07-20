const Cat = require('../models/Cat');

const db = require('../db.json');
const Breeds = require("../models/Breeds");
const newBr = require('../db-breed.json');

exports.getCreateCat = (req, res) => {

    res.render('create');
}

exports.postCreateCat = async (req, res) => {
    const { name, description, image, breed } = req.body
    //let breed = req.body.breed
    let cat = new Cat({ name, description, image, breed });


    await cat.save()
    res.redirect('/')
}



exports.getDetails = (req, res) => {

    let catId = Number(req.params.catId);

    if (!catId) {
        return res.redirect('/404');

    }
    let cat = db.cats.find(x => x.id === catId);

    if (!cat) {
        return res.redirect('/404');
    }

    res.render('details', { cat });
}

