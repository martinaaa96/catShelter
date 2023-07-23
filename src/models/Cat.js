const { Schema,model } = require('mongoose');

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        
    },
    image: {
        type: String,
       
        // add http/https
    },
});

const Cat = model('Cat', catSchema);

module.exports = Cat;
