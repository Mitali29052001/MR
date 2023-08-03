const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
router.post("/register", async(req, res) => {

    try {
        const newuser = new User(req.body)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
  
});

router.post("/login", async(req, res) => {

    try {
        const user = await User.findOne({firstname : req.body.firstname, lastname : req.body.lastname, username : req.body.username , emailid : req.body.emailid, password : req.body.password})
        if(user)
        res.send(user)
        else
        res.send('Invalid Credentials')
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
  
});

module.exports = router;