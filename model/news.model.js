const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
title:String  ,
desc:String,
createdBy:{
    
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user'
    
}
 
},{
    timestamps:true
})

module.exports = mongoose.model('news',userSchema)


