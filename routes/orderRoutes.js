const express = require('express');
const  router = express.Router();
const { placedOrder,canceledOrder}= require('../controller/order')
const paymentJsonSchema = require('../jsonschema/orderJsonSchema')
const validator = require('../services/ajvValidator')
const {paymentInitialize} = require('../controller/payment')

router.post('/placed', paymentInitialize, placedOrder)
router.post('/canceled', canceledOrder)

module.exports = router;