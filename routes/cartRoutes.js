const express = require('express');
const router = express.Router();
const {showCart, addToCart,updateCartProduct, removeFromCart}= require('../controller/cart');
const cartJsonSchema = require('../jsonschema/cartJsonSchema');
const validator = require('../services/ajvValidator');

router.get('/showcart', showCart);
router.post('/addcart', validator(cartJsonSchema),addToCart);
router.post('/updatecart',updateCartProduct);
router.delete('/removefromcart', removeFromCart);
module.exports = router;