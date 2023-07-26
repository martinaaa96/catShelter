const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.startsWith('http://') || value.startsWith('https://');
            },
            message: 'URL is invalid!'
        }

    },
breed: {
    type: String,
    required: true,
    minLength: 5,
}

});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
