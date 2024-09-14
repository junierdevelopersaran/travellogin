const mongoose=require('mongoose') 

const Userhrcrt=new mongoose.Schema({
    companyimg:String,
    companyname:String,
    jobname:String,
    companyarea:String,
    companysalary:String,
  

})
const Hruser=mongoose.model("Hruser",Userhrcrt)
module.exports=Hruser