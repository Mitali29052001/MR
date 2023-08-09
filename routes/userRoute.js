// Import
const express = require("express")
const userController = require("../controllers/userController")
const middleware = require("../middleware/middleware")

const router = express.Router()

// Routes
router.get("/search/:username", middleware, userController.searchUser)

router.get("/getallusers", middleware, userController.getUser)

router.patch("/:id", middleware, userController.updateUser)

router.post("/followuser", middleware, userController.followUser)

router.post("/unfollowuser", middleware, userController.unfollowUser)

// Export
module.exports = router