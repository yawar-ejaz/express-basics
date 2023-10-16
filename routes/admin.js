const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.use('/products', (req, res, next) => {
    console.log(req.body)
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;