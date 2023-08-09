// Import
const express = require("express")

const route = express.Router()
const postController = require("../controllers/postController")
const middleware = require("../middleware/middleware")

// Routes
route.post("/addpost", middleware, postController.createPost)

route.get("/getallposts", middleware, postController.getAllPosts)

// route.get("/:id", middleware, postController.getSinglePost)
// route.get("/user_post/:id", middleware, postController.getUserPosts)

route.post("/editpost", middleware, postController.updatePost)

route.post("/likeorunlikepost", middleware, postController.likePost)

route.post("/likeorunlikepost", middleware, postController.unlikePost)

// route.patch("/save/:id", middleware, postController.savePost)

// route.patch("/unsave/:id", middleware, postController.unsavePost)

// route.get("/saved_posts", middleware, postController.getSavedPosts)

route.delete("/deletepost", middleware, postController.deletePost)

// Export
module.exports = route