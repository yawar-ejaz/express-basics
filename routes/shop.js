const express = require('express');
const path = require('path')
const { home, contactus, success } = require('../controllers/shop');

const router = express.Router();

router.route('/').get(home);

router.route('/contactus').get(contactus);

router.route('/success').post(success);

module.exports = router;