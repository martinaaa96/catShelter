const Cat = require('../models/Cat');
const db = require('../db.json');


exports.getCreateCat = (req, res) => {

    res.render('create');


}

exports.postCreateCat = (req, res) => {
    const { name, description, image } = req.body
    let breed = req.body.breed
    let cat = new Cat(name, description, image, breed)


    cat.save()
    res.redirect('/')
}

exports.getDetails = (req, res) => {

    let catId = Number(req.params.catId);
    let cat = db.cats.find(x => x.id === catId);



    res.render('details', { cat });
}

