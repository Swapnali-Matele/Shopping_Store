const mongoose= require('mongoose');
const orderSchema = require('./orderSchema')
const cartSchema = require('./cartSchema')
const userSchema = require('./userSchema')



const paymentSchema = new mongoose.Schema({
    user_ID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'userSchema' 
    },
    order_ID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'orderSchema' 
    },
    payment_method:{
        type:String,
        enum: ['UPI', 'Netbanking', 'CardPayment'],
        default: 'UPI',
    },
    payment_status:{
        type:String,
        enum: ['Unpaid', 'Pending','Paid'],
        default: 'Paid',
    },
    delivery_status:{
        type: String,
        enum:['shipped','delivered','canceled'],
        default: 'shipped'
    },
});

module.exports = mongoose.model('Payments',paymentSchema);