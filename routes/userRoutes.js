const express = require('express');
const router = express.Router();
const{ 
    userRegistration,
    userLogin,} = require('../controller/user')

router.post('/userregistration', userRegistration)
router.post('/userlogin', userLogin)

module.exports = router;

