const product = require('../models/furnitureSchema')
const userLogin = require('./user');
const userSchema = require('../models/userSchema');

const Furniture = async (req, res)=>{
    // //const {email, password} = req.body;
    try{
        const {email, password} = req.body;
        const user = await userSchema.find({email, password});
        console.log(user)
        const FurnitureData_Display = await product.find({})
        res.send (FurnitureData_Display)

     }catch (err){
        res.send(err);
    }

}


module.exports = Furniture