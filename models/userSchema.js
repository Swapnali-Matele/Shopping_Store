const mongoose= require('mongoose');
const validator = require('validator');
//Defining schema

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        
    },
    email:{
        type: String,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')}
            }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password_confirmation:{
        type: String,
        required: true,
        unique: true,
        // validate(value){
        //     if(value === value ){
        //         throw new Error('Password confirmation is not match with password')}
        // }
    },
    tc:{
        type: Boolean,
        required: true,
    
    }
})

//create model by using schema

module.exports = mongoose.model('user', userSchema);

//export default UserModel;
//module.exports = UserModel