const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><form action="/admin/products" method="POST"><input type="text" name="item" placeholder="Item Name"><input type="number" name="size" placeholder="Size"><input type="submit" value="submit"></input></form>');
});
router.post('/products', (req, res, next) => {
    const data = req.body;
    console.log(data);
    res.redirect('/');
});

module.exports = router;