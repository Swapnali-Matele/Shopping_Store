const userSchema = require('../models/userSchema')
const cartSchema = require('../models/cartSchema')
const furnitureSchema = require('../models/furnitureSchema')
const orderSchema = require('../models/orderSchema')

const placedOrder = async (req, res) => {
    try{

    const {cart_ID, user_ID, qty,amount,total_price,payment_method} = req.body
    const order = await cartSchema.find({user_ID, cart_ID, qty,inStock})
    const order_placed = await orderSchema.find({ })
    res.send('Your order has been placed');

}catch(err){
    res.send(err.message);
}
}

const canceledOrder = async (req, res) => {
    try{

        const {cart_ID, user_ID} = req.body
        const order = await orderchema.find({cart_ID,user_ID})
        res.send('Your order has been canceled')

    }catch(err){
        res.send(err.message);
    }

}