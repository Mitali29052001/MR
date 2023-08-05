const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const { cloudinary } = require("../cloudinary");

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
        const user = await User.findOne({username : req.body.username , password : req.body.password})
        if(user)
        res.send(user)
        else
        return res.status(400).json('');
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
  
});
module.exports = router;