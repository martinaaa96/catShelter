const { Schema,model } = require('mongoose');

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLenght: 5,

    },
    image: {
        type: String,
        required: true,
        // add http/https
    },
});

const Cat = model('Cat', catSchema);

module.exports = Cat;
