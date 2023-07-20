const mongoose = require('mongoose');

const config = require('./index')

async function initDataBase() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(config.DB_URI);

    console.log('CONNECTED');
}


module.exports = initDataBase;
