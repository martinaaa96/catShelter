const fs = require('fs/promises')

const db = require('../db.json');
const path = require('path');

class Cat {
    constructor(name, description, image, breed) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.breed = breed;

    }
    static save(cats) {

        db.cats.push(cats);
        const jsonData = JSON.stringify(db, null, 2);

        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)
    }

}

module.exports = Cat;

