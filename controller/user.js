const Ajv = require('ajv');
const ajv = new Ajv();
const userSchema = require("../models/userSchema");
const jwt = require('jsonwebtoken')



const userRegistration = async (req, res) => {
  try{
  const data = req.body
  
  const a = await userSchema.find({email: data.email})
  if(!a){
  const add = new userSchema(data)
  const user = await add.save()
  res.status(200).json({status: 200, data: user, message:"Sucessfull"})
  }else{
    res.status(400).json({status: 400, data:a, message:"User already exists"})

  }
  }catch(err){
    res.status(400).json({status: 400, data:{ }, message:"failed"}
    )
  }
};

const userLogin = async (req, res) => {
  try {
    const data = req.body;
    //console.log(data)
    const userLogged = await userSchema.findOne({
      email: data.email,
      password: data.password,
    });
    //console.log(userLogged)
    if(!userLogged) {
      return res.status(400).json({status: 400, data:{}, message:"UserId or password is wrong"})
    }
    
    const secret = process.env.JWT_SECRET_KEY
    //console.log(secret)
    console.log(userLogged)
    const token = jwt.sign({_id: userLogged._id}, secret,{expiresIn:'60m'})
    console.log(token)
    res.status(200).json({status: 200, data:{token}, message: 'Logged in sucessfully'})

} catch (err) {
    res.send("Your password or email is incorrect");
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
