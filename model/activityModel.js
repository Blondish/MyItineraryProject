const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  itinid: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("activity", activitySchema);
