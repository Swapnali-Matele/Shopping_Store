const AJV = require("ajv")
const v = new AJV({allErrors: true})
function validator(schema) {
    return (req, res, next) => {
        const validate = v.compile(schema)
        const valid = validate(req.body)
        if(!valid) {
            console.log(validate.errors)
            const message = validate.errors[0].message
            return res.status(400).json({status: 400, "message": message, data: {}})
        }
        next()
    }
}


module.exports = validator