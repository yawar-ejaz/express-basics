const path = require('path')

const home = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
};

const contactus = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
};

const success =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
};

module.exports = {home, contactus, success};