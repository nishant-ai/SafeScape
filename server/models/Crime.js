const mongoose = require("mongoose");

const CrimeSchema = new mongoose.Schema({
  Year: {
    type: String,
  },
  District: {
    type: String,
  },
  State: {
    type: String,
  },
  CrimeType: {
    type: String,
  },
  CrimeRate: {
    type: String,
    default: 0,
  },
});

const Crime = mongoose.model("Crime", CrimeSchema);
module.exports = Crime;
