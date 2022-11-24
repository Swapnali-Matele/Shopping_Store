const express = require('express');
const  router = express.Router();
const {placedOrder, canceledOrder}= require('../controller/order')

router.post('/placed', placedOrder)
router.post('/canceled', canceledOrder)

module.exports = router;