//const db = require('../db.json')
const Cat = require('../models/Cat')

exports.getHomePage = async (req, res) => {
    const { search } = req.query;
    let cats = await Cat.find();
    if (search) {
        cats = cats.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()));
    }

    res.render('index', { cats, search });

};

exports.getErrorPage = (req, res) => {
    res.render('404');
}
