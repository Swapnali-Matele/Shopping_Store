const Ajv = require('ajv');
const ajv = new Ajv();
const userSchema = require("../models/userSchema");


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

    //await userSchema.findOne({ email: email, password: password});
    const userLogged = await userSchema.find({
      email: email,
      password: password,
    });
    if(userLogged){
    //console.log(userLogged);
    res.status(200).json({status: 200, data: userLogged, message: "Success"})
  }else{
    res.status(400).json({status: 400, data:{}, message:"UserId or password is wrong"})
  }
} catch (err) {
    res.send("Your password or email is incorrect");
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
