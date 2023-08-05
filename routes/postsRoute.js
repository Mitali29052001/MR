const express = require("express");
const router = express.Router();
const { cloudinary } = require("../cloudinary");
const Post = require("../models/postModel");
router.post("/addpost", async (req, res) => {
  try {
    const uploadResponse = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "mr",
      use_filename: true,
    });
    req.body.image = uploadResponse.url;
    const newpost = new Post(req.body);
    await newpost.save();

    res.send("Post added successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});
module.exports = router;
router.get("/getallposts", async (req, res) => {
  try {
    const posts = await Post.find().populate("user").sort({createdAt : -1}).exec()
    res.send(posts);
  } catch (error) {
    return res.status(400).json(error);
  }
});
module.exports= router;
