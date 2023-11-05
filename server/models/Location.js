const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  //store district and state in a array
  location: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
