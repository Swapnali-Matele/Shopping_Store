const userSchema = require('../models/userSchema')
const cartSchema = require('../models/cartSchema')
const furnitureSchema = require('../models/furnitureSchema')
const orderSchema = require('../models/orderSchema')
const paymentSchema = require('../models/paymentSchema')

const placedOrder = async (req, res) => {
    try{

    const {user_ID, payment_method} = req.body

    const order = await cartSchema.find({user_ID})
    console.log(order)
    //const order_placed = await orderSchema.find({ })
    const paymentLink = await paymentSchema.find({payment_method: order.payment_method})
    res.send('Your order has been placed');

}catch(err){
    res.send(err.message);
}
}

const canceledOrder = async (req, res) => {
    try{

        const {cart_ID, user_ID} = req.body
        const order = await orderchema.findOneAndDelete({cart_ID,user_ID})
        res.send('Your order has been canceled')

    }catch(err){
        res.send(err.message);
    }

}

module.exports = {
    placedOrder,
    canceledOrder,
}