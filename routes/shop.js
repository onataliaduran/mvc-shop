const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();

// BASIC STRUTURE
// router.get('/', (req, res, next) => {
// code here...
// });

router.get('/', productsController.getIndex);
router.get('/courses', productsController.getProducts);
router.get('/cart', productsController.getCart);

module.exports = router;