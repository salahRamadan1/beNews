const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
name:String,
email:String,
password:String,
age:Number,
 
},{
    timestamps:true
})

module.exports = mongoose.model('user',userSchema)


