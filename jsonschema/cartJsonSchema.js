const mongoose = require('mongoose')

module.exports  = {
    type: 'object',
    properties: {
      product_ID: {
        type: 'string'
          },  
      name:{
        type: 'string'
      },
      qty: {
        type: 'string',
        default:'1'
      },
      material:{
        type: 'string',
        default: 'Wooden',
      },
      color:{
        type:'string',
        default: 'maroon',
      }
    
   },
   
   required:["product_ID","qty"]
}