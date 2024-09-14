const mongoose = require('mongoose')

const applied = new mongoose.Schema({
    applyname:String,
    applymail:String,
    applydedc:String,
    phoneno:Number,
    exprience:String,
    indian:String,
    placetn:String,
    appliedjobtitle:String,
    appliedcompany:String,
    appliedcompanyplace:String
})
const applyuser = mongoose.model("applyuser", applied)
module.exports = applyuser