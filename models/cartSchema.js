const mongoose = require("mongoose");
const furnitureSchema = require("./furnitureSchema");
const validator = require('validator');
//Defining schema

const cartSchema = new mongoose.Schema({
  user_ID: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "userSchema" 
  },
  product_ID: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "furnitureSchema" 
  },
  qty: {
    type: Number,
    default:1
  },
  material: {
    type: String,
    enum: ["Wooden", "Metal", "Fiber"],
    default: "Wooden",
  },
  InStock: {
    type: Number,
    default : 10,
  },
  Price: {
    type: Number,
   
  },

  total_price: {
    type: Number,
    
  },
  payment_ID: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "paymentSchema" 

  }
});

console.log();
//create model by using schema

module.exports = mongoose.model("cart", cartSchema);
