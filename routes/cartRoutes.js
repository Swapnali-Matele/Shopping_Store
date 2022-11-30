const express = require('express');
const router = express.Router();
const {showCart, addToCart, removeFromCart}= require('../controller/cart');
const cartJsonSchema = require('../jsonschema/cartJsonSchema');
const validator = require('../services/ajvValidator');

router.get('/showcart', showCart);
router.post('/addcart', validator(cartJsonSchema),addToCart);
router.delete('/removefromcart', removeFromCart);
module.exports = router;