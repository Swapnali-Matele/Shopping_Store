const Ajv = require('ajv');
const ajv = new Ajv();
const furnitureSchema = require('../models/furnitureSchema');
const userSchema = require('../models/userSchema');
const cartSchema = require('../models/cartSchema');

const showCart = async (req, res)=>{
    try{
    // const {email, password} = req.body;
    // const user = await userSchema.find({email, password})
    const user = req.user
    const show_cart = await cartSchema.find({user_ID: user._id})
    if(show_cart && show_cart.length){
        res.send(show_cart);
    }else{
        res.send('Your cart is empty please add for buy');
    }
    
    }catch(err){
        res.send(err.message);
        
    }

}

const addToCart = async (req, res)=>{
    try{

    const data = req.body;
    const user = req.user
        
        const cart_product = await furnitureSchema.findOne({_id:data.product_ID});
        console.log(cart_product)
        
        const doc = new cartSchema({
            user_ID: user.user_ID,
            product_ID: cart_product._id,
            qty: data.qty,
            material:data.material,
            color:data.color,
            InStock:cart_product.InStock,
            Price:cart_product.Price,
            total_price: data.qty * cart_product.Price
          });
          
          //here we saved the data provided by user into  db

          await doc.save();
          res.send(doc);
        
    }catch(err){
        res.send(err.message);
    }

}

const updateCartProduct = async (req,res)=>{
    try{
   const data = req.body
   //const user = user.req
    const cart_product = await cartSchema.updateOne({_id: data._id},{qty: data.qty},{new: true, runValidators: true,
      });
    res.status(200).json({status: 200, data:{cart_product}, message: "Your crat has been updated "})
}catch(err){
    res.send(err)
    console.log(err,'here is the error')
}
}

const removeFromCart = async (req, res)=>{
    try{

        const {product_ID,user_ID} = req.body;
        const cart_product = await cartSchema.findOneAndDelete({product_ID,user_ID})
        res.send('product removed from cart successfully');
    }catch(err){
        res.send(err.message);
    }
    }


module.exports = {
    showCart,
    addToCart,
    updateCartProduct,
    removeFromCart,
}
