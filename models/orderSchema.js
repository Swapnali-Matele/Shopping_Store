const mongoose = require('mongoose');
const cartSchema = require('./cartSchema')

const orderSchema = new mongoose.Schema({
    cart_ID:{
        id : [{ type: mongoose.Schema.Types.ObjectId, 
            ref: 'cartSchema' }] 
    },
    o_date_time:{
        type: DateTime,
        default:DateTime.now(),
    },
    qty:{
        type: Number,
        required: true,
    },
    delivery_status:{
        type: String,
        enum: ['shipped', 'delivered', 'canceled'],
        default: 'delivered',
    },
    amount:{
        type: Number,
        required: true,
    },
    total_price:{
        type: Number,
        required: true,
    },
    payment_method:{
        type:String,
        enum: ['UPI', 'Netbanking', 'CardPayment'],
        default: 'UPI',
    }
})

module.exports = orderSchema;