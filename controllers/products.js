
const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    const p = [];

    Product.fetchAll()
        .then(products => {
            res.render('shop/index', {
                prods: products[0],
            });
        })
        .catch();
};

exports.getProducts = (req, res, next) => {
    const p = [];

    Product.fetchAll()
        .then(products => {
            res.render('shop/product-list', {
                prods: products[0],
            });
        })
        .catch();
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart');
};