const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title must be provided"],
  },
  body: {
    type: String,
    require: [true, "body must be provided"],
  },
});

module.exports = mongoose.model("Post", postSchema);
