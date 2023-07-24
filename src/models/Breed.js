const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({

    name: {
        type: String,
     
    },

});


const Breed = mongoose.model('Breed', breedSchema);


module.exports = Breed;


