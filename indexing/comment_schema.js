const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Post schema
const Comment = new Schema({
  postId: { type: Number, required: true },
  id: { type: Number, required: true },
  user: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true }
    }
  ],

  body: { type: String, required: true }
});

module.exports = mongoose.model("Comment", Comment);
