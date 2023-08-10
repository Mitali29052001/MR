const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()



mongoose.connect( process.env.MONGO_DB,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true });

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log("Database connection established successfully")
})

connection.on('error' , ()=>{
    console.log("Database connection failed due to error: ",error)
})

module.exports = mongoose