const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username must be provided"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password must be provided"],
  },
});

module.exports = mongoose.model("User", userSchema);
