const path = require('path')

const add_product = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

const products = (req, res, next) => {
    // console.log(req.body)
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
};

module.exports = {add_product, products};