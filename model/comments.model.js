const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  comment:String,
createdByIdUser:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'user'
},
createdByIdNews:{
    type: mongoose.SchemaTypes.ObjectId,
    ref:'news'
}

    },{
        timestamps:true
    })
    
    module.exports = mongoose.model('comment',userSchema)