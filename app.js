const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/add-product', (req, res, next) => {
    // res.send('<h1>Shopping time</h1>');
    res.send('<html><form action="/products" method="POST"><input type="text" name="item" placeholder="Item Name"><input type="number" name="size" placeholder="Size"><input type="submit" value="submit"></input></form>');
    // res.send('<form action="/products" method="POST">');
    // res.send('<input type="text" name="item">');
    // res.send('<input type="submit" value="submit">');
    // res.send('</input>');
    // res.send('</form>');
});
app.post('/products', (req, res, next) => {
    const data = req.body;
    console.log(data);
    // res.send('<h1>Products Here</h1>');
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    res.send('<h1>Basic Page</h1>');
});



app.listen(3000);