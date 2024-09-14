const mongoose = require('mongoose')

const reglog = new mongoose.Schema({
    regname: String,
    regusername:String ,
    regusermail: String,
    reguserpass: String
})
const regloguser = mongoose.model("regloguser", reglog)
module.exports = regloguser