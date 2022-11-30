const mongoose = require('mongoose');
const cartSchema = require('./cartSchema')
const paymentSchema = require('./paymentSchema')

const orderSchema = new mongoose.Schema({
    
    user_ID:{
         type: mongoose.Schema.Types.ObjectId, 
            ref: 'userSchema' 
    },
    // o_date_time:{
    //     type: Date
    //     default: () => Date.now() + 7*24*60*60*1000,
    // },
    qty:{
        type: Number,
        required: true,
    },
    delivery_status:{
        type: String,
        enum: ['shipped', 'delivered', 'canceled'],
        default: 'shipped',
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
    },
    payment_ID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'paymentSchema' 
    },
    payment_status:{
        type: String,
        enum: ['Unpid', 'Paid'],
        default: 'Paid'
   }

})

module.exports = mongoose.model('order',orderSchema);