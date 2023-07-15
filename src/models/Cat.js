const fs = require('fs/promises')

const db = require('../db.json');
const path = require('path');

class Cat {
    constructor(name, description, imageUrl, breed) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.breed = breed;

    }
 static  save(cats){

db.cats.push(cats);
const jsonData = JSON.stringify(db,2);

fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)
 }

}

module.exports = Cat;

