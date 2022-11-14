const mongoose = require("mongoose")
module.exports.dbConnection=()=>{
    mongoose.connect('mongodb://localhost:27017/newsApi').then(()=>{
        console.log('db connection');
    })
}