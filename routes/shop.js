const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
});

router.post('/success', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
});

module.exports = router;