const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  cityname: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  profilepic: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  },
  cityid: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("itinerary", itinerarySchema);
