const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//if the page is not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error-page.html'));
});

app.listen(3000);