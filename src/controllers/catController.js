const Cat = require('../models/Cat')

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

