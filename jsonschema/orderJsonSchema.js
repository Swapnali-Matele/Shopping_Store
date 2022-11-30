module.exports  = {
    type: 'object',
    properties: {
      name:{
        type: 'string',
      },
      email:{
        type: 'string'
      },
      password:{
        type: 'string'
      },
      password_confirmation:{
        type: 'string'
      },
      tc:{
        type: 'boolean',
      },
    },
    required:["name","email", "password","password_confirmation", "tc"]
   }