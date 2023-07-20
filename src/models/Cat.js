const { Schema,model } = require('mongoose');

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLenght: 20,

    },
    imageUrl: {
        type: String,
        required: true,
        // add http/https
    },
    breed: {
        type: String,
        required: true,
        maxLenght: 10,
        minLenght: 5,

    }
});

const Cat = model('Cat', catSchema);

module.exports = Cat;
