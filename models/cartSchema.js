const mongoose = require("mongoose");
const furnitureSchema = require("./furnitureSchema");
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
    required: true,
  },
  material: {
    type: String,
    enum: ["Wooden", "Metal", "Fiber"],
    default: "Wooden",
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  total_price: {
    type: Number,
    required: true,
  },
  payment_ID: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "paymentSchema" 

  }
});

console.log();
//create model by using schema

module.exports = mongoose.model("cart", cartSchema);
