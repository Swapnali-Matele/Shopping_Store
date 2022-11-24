const mongoose= require('mongoose');
const orderSchema = require('./orderSchema')
const cartSchema = require('./cartSchema')
const userSchema = require('./userSchema')

const paymentSchema = new mongoose.Schema({
    user_ID:{
        id : [{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'userSchema' }]
    },
    // order_ID:{
    //     id : [{ type: mongoose.Schema.Types.ObjectId,
    //     ref: 'orderSchema' }]
    // },
    payment_method:{
        type:String,
        enum: ['UPI', 'Netbanking', 'CardPayment'],
        default: 'UPI',
    },
    payment_status:{
        type:String,
        enum: ['Unpaid', 'Pending','Paid'],
        default: 'Pending',
    },
    // payment_date:{
    //     type: DateTime,
    //     default: DateTime.now(),
    // },
});

module.exports = paymentSchema;