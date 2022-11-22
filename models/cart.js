const mongoose= require('mongoose');
const furnitureSchema = require('./furnitureSchema')
//Defining schema

const cartSchema = new mongoose.Schema({
    user_ID:{
        id : [{ type: Schema.Types.ObjectId, ref: 'userSchema' }] 
    },
    product_ID:{
        id : [{ type: Schema.Types.ObjectId, ref: 'furnitureSchema' }] 
    
    },
    qty:{
        type: Number,
        required: true,
        trim: true,
    },
    total_price:{
        type: Number,
        required: true,
        trim: true,
    },
    inStoke:{
        type: Boolean,
        required: true,
    
    }
})

console.log()
//create model by using schema

module.exports = mongoose.model('user', userSchema);

