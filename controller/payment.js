const cartSchema = require("../models/cartSchema")
const orderSchema = require("../models/orderSchema")
const paymentSchema = require("../models/paymentSchema")
const order = require('./order')

const paymentInitialize = async (req, res, next) =>{
    const data = req.body
    try{
    
   
    const D = await orderSchema({user_ID:data.user_ID})

    const add = new paymentSchema({
        user_ID: data.user_ID,
        order_ID: D.order_ID,
        payment_method : data.payment_method,
        payment_status: D.payment_staus
    })
    const payment = await add.save()
    console.log(payment)

    
    if(!payment){
        
        res.status(400).json({status: 400, data:{}, message: 'There is an error'})
    }
    next()
   }catch(err){
    console.log(err, "in error")
    res.send(err)
   }
}

module.exports = {
    paymentInitialize,
    
}