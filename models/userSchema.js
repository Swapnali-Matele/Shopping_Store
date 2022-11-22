const mongoose= require('mongoose');
//Defining schema

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    password_confirmation:{
        type: String,
        required: true,
        trim: true,
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