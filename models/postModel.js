// Import
const mongoose = require("mongoose")

// Creating schema
const postSchema = new mongoose.Schema({
  images: {
    type: Array,
    required: true,
    public_id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    maxLength: 500,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  likes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
  ],
}, {
  timestamps: true,
})

// Creating model
const postModel = mongoose.model("posts", postSchema, "post_collection")

// Export
module.exports = postModel