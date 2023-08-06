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
router.get("/getallusers", async(req, res) => {
  
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }

});
router.post("/followuser", async(req, res) =>{
    const{currentUserId, receiverUserId} = req.body
    console.log(req.body)
    try{
        // current userdata , updating following
        // fetching current user
        var currentUser = await User.findOne({_id : currentUserId})
        // pushing cuurent user id
        var currentUserFollowing = currentUser.following || [];
        currentUserFollowing.push(receiverUserId)

        // update current user
        currentUser.following = currentUserFollowing
        await User.updateOne({_id : currentUserId}, currentUser)

        // receiver user data, updating followers
        var receiverUser = await User.findOne({_id : receiverUserId})
        // get current followers
        var receiverUserFollowers = receiverUser.followers
        receiverUserFollowers.push(currentUserId)

        receiverUser.followers = receiverUserFollowers

        await User.updateOne({_id : receiverUserId}, receiverUser)
        res.send("Successfully Followed..!")
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:''});

    }
});

router.post("/unfollowuser", async(req, res) =>{
    const{currentUserId, receiverUserId} = req.body
    console.log(req.body)
    try{
    
        var currentUser = await User.findOne({_id : currentUserId})
      
        var currentUserFollowing = currentUser.following
        
        const temp = currentUserFollowing.filter(obj=>obj.toString()!==receiverUserId)

        
        currentUser.following = temp
        await User.updateOne({_id : currentUserId}, currentUser)

        // receiver user data, updating followers
        var receiverUser = await User.findOne({_id : receiverUserId})
        // get current followers
        var receiverUserFollowers = receiverUser.followers
        const temp1 = receiverUserFollowers.filter(obj=>obj.toString()!==currentUserId)

        receiverUser.followers = temp1

        await User.updateOne({_id : receiverUserId}, receiverUser)
        res.send("Successfully Unfollowed..!")
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:''});

    }
})
module.exports = router;