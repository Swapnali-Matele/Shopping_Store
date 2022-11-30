const express = require('express');
const  router = express.Router();
const { paymentInitialize}= require('../controller/payment')
const paymentJsonSchema = require('../jsonschema/orderJsonSchema')
const validator = require('../services/ajvValidator')

router.post('/payment',paymentInitialize,)


module.exports = router;