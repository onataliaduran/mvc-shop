
const products = [];
const db = require('../utils/database');

module.exports = class Product {
    constructor(title, img, description, price) {
        this.title = title;
        this.img = img;
        this.description = description;
        this.price = price;
    }

    save() {
        
    }

    update() {

    }

    delete() {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
        // return products;
    }
}