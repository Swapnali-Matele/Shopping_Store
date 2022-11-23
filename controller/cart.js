const furnitureSchema = require('../models/furnitureSchema');
const userSchema = require('../models/userSchema');
const cartSchema = require('../models/cartSchema');

const showCart = async (req, res)=>{
    try{

    const {email, password} = req.body;
    const user = await userSchema.find({email, password})
    const show_cart = await cartSchema.find({_id: user._id})
    if(show_cart === true){
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

    const{user_ID,product_ID, qty, 
        material, inStock,amount,total_price} = req.body;
        console.log(req.body);
        const cart_product = await cartSchema.find({user_ID, product_ID,material,inStock});
        
        const doc = new cartSchema({
            user_ID: user_ID,
            product_ID: product_ID,
            qty: qty,
            material:material,
            inStock:inStock,
            amount:amount,
            total_price:total_price
          });
          //here we saved the data provided by user into  db

          await doc.save();
          res.send(doc);
        
    }catch(err){
        res.send(err.message);
    }

}

const removeFromCart = async (req, res)=>{
    try{

        const {product_ID,user_ID} = req.body;
        const cart_product = await cartSchema.find({product_ID,user_ID})

        res.send('product removed from cart successfully');
    }catch(err){
        res.send(err.message);
    }
    }


module.exports = {
    showCart,
    addToCart,
    removeFromCart,
}
