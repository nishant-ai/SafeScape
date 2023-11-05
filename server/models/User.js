const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  api_key: {
    type: String,
    unique: true,
    required: true,
  },
  hit: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
