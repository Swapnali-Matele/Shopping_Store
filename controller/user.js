// here we import schema on which we have dooperations or functions
const userSchema = require("../models/userSchema");

//here we write a function to log on our shopping web

const userRegistration = async (req, res) => {
  try {
    const { name, email, password, password_confirmation, tc } = req.body;
    console.log(req.body);
    //const user = req.body
    const a = await userSchema.find({ email: email });
    console.log(a);
    if (a === true) {
      res.send("email alrady exists");
    } else {
      if (name && email && password && password_confirmation && tc) {
        //here we check both pass and pass_conf is same
        if (password === password_confirmation) {
          //after check we save provided data into db
          const doc = new userSchema({
            name: name,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
            tc: tc,
          });
          //here we saved the data provided by user into  db

          await doc.save();
          res.send({ status: "Saved" });
        } else {
          res.send("password and password_confirmation does not match");
        }
      } else {
        res.send("All fields are required");
      }
    }
  } catch (err) {
    res.send(err);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //await userSchema.findOne({ email: email, password: password});
    const userLogged = await userSchema.findOne({
      email: email,
      password: password,
    });
    console.log(userLogged);
    res.send("Your successfully logged in");
  } catch (err) {
    res.send("Your password or email is incorrect");
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
