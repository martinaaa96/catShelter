const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
    },
    description: {
        type: String,

    },
    image: {
        type: String,

        // add http/https
    },
    breed: {
        type: String,
       
    },

});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
