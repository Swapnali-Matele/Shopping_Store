const express = require('express');
const router = express.Router();
const{ 
    userRegistration,
    userLogin,} = require('../controller/user');
const registerJsonSchema = require('../jsonschema/registerJsonSchema');
const loginJsonSchema = require('../jsonschema/loginJsonSchema')
const validator = require('../services/ajvValidator');

router.post('/userregistration', validator(registerJsonSchema),userRegistration)
router.post('/userlogin', validator(loginJsonSchema),userLogin)

module.exports = router;

