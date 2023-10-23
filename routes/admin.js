const path = require('path')
const express = require('express');
const router = express.Router();
const { add_product, products } = require('../controllers/admin');

router.route('/add-product').get(add_product);

router.route('/products').get(products).post(products);

module.exports = router;