const Cat = require('../models/Cat')

exports.getCreateCat = (req, res) => {

    res.render('create');


}

exports.postCreateCat = (req, res) => {
    let cat = new Cat(req.body);
Cat.save(cat)

    res.redirect('/');
}