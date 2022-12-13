const userSchema = require('../models/userSchema')
const cartSchema = require('../models/cartSchema')
const furnitureSchema = require('../models/furnitureSchema')
const orderSchema = require('../models/orderSchema')
const paymentSchema = require('../models/paymentSchema')
const cart = require ('./cart')
const payment = require('./payment')

const placedOrder = async (req, res) => {
    
    try{
        const data = req.body
        const a = await cartSchema.find({user_ID:data.user_ID})
        const B = await paymentSchema.find({user_ID: data.user_ID})
        
    if(a){
        
        //for (let i= 0; i< a.length;i++)
        for (const element of add){
         const add = new orderSchema({
            user_ID: data.user_ID,
            cart_ID: element._id,
            qty: element.qty,
            delivery_status: B.delivery_status,
            amount: element.amount,
            total_price: element.amount* element.qty,
            payment_method:data.payment_method,
            payment_id: B._id,
            payment_status: B.payment_status
            
        });
        const order = await add.save()
        
    }
    res.status(200).json({status: 200, data:{ }, message: "your order has been placed"})
 
        }
    
    
    }catch(err){
        console.log(err)
      res.status(400).json({status: 400, message:"failed"})
    }
  };

  

  
const canceledOrder = async (req, res) => {
    try{

        const data = req.body
        const order = await orderSchema.findOneAndDelete({_id:data._id})
        res.status(200).json({status: 200, data:{order}, message:'Your order has been cancled'})

    }catch(err){
        res.send(err.message);
    }

}

module.exports = {

    placedOrder,
    canceledOrder,
}