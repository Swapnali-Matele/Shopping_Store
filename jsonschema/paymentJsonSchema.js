module.exports  = {
    type: 'object',
    properties: {
      user_ID:{
        type: 'string',
      },
      payment_method:{
        type: 'string'
      },
      payment_status:{
        type: 'string'
      },
    },
    required:["user_ID","payment_method","payment_status"]
   }