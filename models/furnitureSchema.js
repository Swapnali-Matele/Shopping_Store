const mongoose= require('mongoose');
const validator = require('validator');
//Defining schema

const furnitureSchema = new mongoose.Schema({
    Type:{
        type: String,
        required: true,
        trim: true,
    },
    Name:{
        type: String,
        required: true,
        trim: true,
    },
    Brand:{
        type: String,
        required: true,
        trim: true,
    },
    Material:{
        type: Array,
        required: true,
        trim: true,
        default: 'Wooden',
    },
    color:{
        type: Array,
        required: true,
        trim: true,
        default:'maroon',
    },
    Price:{
        type: Number,
        required: true,
        
    },
    InStock:{
        type: Boolean,
        required: true,
    
    }
})

module.exports = mongoose.model('Furniture_catalog',furnitureSchema)