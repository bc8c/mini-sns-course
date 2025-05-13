const mongoose = require("mongoose");

const feedSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true, // Feed content (required)
    },
    author: {
      type: String,
      required: true, // Author name (required)
    },
    likes: [String], // Array of usernames who liked the post
    comments: [
      {
        username: String,
        text: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "feed" }
); // Explicitly specify the collection name

module.exports = mongoose.model("Feed", feedSchema);
