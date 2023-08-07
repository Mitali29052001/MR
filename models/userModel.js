const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstname: { type: String, required: true,  unique: false},
    lastname: { type: String,  required: true, unique: false},   
    username : {type : String, required: true} , 
    emailid: {type: String, required: true,  unique: true},
    password : {type : String, required: true}, 

    followers : [{type : mongoose.Schema.Types.ObjectId, req : 'users'}] ,
    following : [{type : mongoose.Schema.Types.ObjectId, req : 'users'}] ,
    profilePicUrl : {type : String, required:false , default: ''},
    bio : {type : String, required:false , default:''},
    savedPosts : [],



} , {
    timestamps : true,
})

module.exports = mongoose.model("users" , userSchema)