const mongoose = require("mongoose");

const CrimeSchema = new mongoose.Schema({
  year: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  crime_type: {
    type: String,
  },
  crime_rate: {
    type: String,
  },
});

const Crime = mongoose.model("Crime", CrimeSchema);
module.exports = Crime;
