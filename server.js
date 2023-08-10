const express = require("express")
const dotenv = require("dotenv")
const connectToDatabase = require("./config/db")
const usersRoute = require("./routes/usersRoute.js")
const postsRoute = require("./routes/postsRoute")


dotenv.config()

const app = express()
app.use(express.json({limit: '25mb'}))
app.use('/api/users/', usersRoute)
app.use('/api/posts/', postsRoute)



app.get("/", (req, res) => {
    res.send("This is from server")
})

app.listen(process.env.PORT, (error) =>{
    if(error){
        console.log("Server unable to start due to error: ", error)
    }

    console.log(`Server successfully started at PORT: ${process.env.PORT}`)
} )