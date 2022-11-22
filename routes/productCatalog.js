const express = require('express');
const router = express.Router()
//const products = require('../populate')
const products = require('../controller/product')

//router.get('/products' , products)
router.get('/products', products)

module.exports = router;