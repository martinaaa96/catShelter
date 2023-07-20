const Cat = require('../models/Cat');
const db = require('../db.json');
const Breeds = require("../models/Breeds");
const newBr = require('../db-breed.json');

exports.getCreateCat = (req, res) => {

    res.render('create');
}

exports.postCreateCat = (req, res) => {
    const { name, description, image } = req.body
   let breed = req.body.breed
    let cat = new Cat(name, description, image,breed)


    cat.save()
    res.redirect('/')
}
exports.getBreedCreate = (req,res)=>{
    res.render('addBreed')
}

exports.postBreedCreate = (req,res)=>{
    const breed = req.body.breed;
    let newBreed = new Breeds(breed);
    
    newBreed.save();
    res.redirect('/');


}
exports.getDetails = (req, res) => {

    let catId = Number(req.params.catId);

    if(!catId){
        return res.redirect('/404');

    }
    let cat = db.cats.find(x => x.id === catId);

if(!cat){
   return res.redirect('/404');
}

    res.render('details', { cat });
}

