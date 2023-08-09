const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username : {type : String, required: true} , 
    password : {type : String, required: true} , 
    email: {type: String, required: true,  unique: true},
    followers : [{type : mongoose.Schema.Types.ObjectId, req : 'users'}] ,
    following : [{type : mongoose.Schema.Types.ObjectId, req : 'users'}] ,
    profilePicUrl : {type : String, required:false , default: ''},
    bio : {type : String, required:false , default:''},
    



} , {
    timestamps : true,
})

module.exports = mongoose.model("users" , userSchema)