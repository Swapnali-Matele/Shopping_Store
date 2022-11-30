const jwt = require("jsonwebtoken")
const userSchema = require("../models/userSchema")
const unauthenticatedPaths = ["/api/user/userlogin", "/api/user/userregistration"]
async function authenticate(req, res, next) {
    if(unauthenticatedPaths.includes(req.path)) {
        return next()
    }
    try{const accesstoken = req.headers.accesstoken ? req.headers.accesstoken : ""
    
    if(!accesstoken) {

        return res.status(401).json({message: "Unauthenticated"})
    }
    const user = await verifyToken(accesstoken)
    if(!user || !user._id) {
        return res.status(401).json({message: "No Such User Found"})
    }
    const userDetails = await userSchema.findOne({_id: user._id})
    if(!userDetails) {
        return res.status(401).json({message: "No Such User Found"})
    }
    req.user = userDetails
    next()
    }catch(error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}
async function verifyToken(accesstoken) {
    const  secret = process.env.JWT_SECRET_KEY
    return new Promise((resolve, reject) => {
        jwt.verify(accesstoken, secret, (err, decoded) => {
            if(err) {
                reject(err)
            }
            resolve(decoded)
        })
    })
}
module.exports = authenticate
