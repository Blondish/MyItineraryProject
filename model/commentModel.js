const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: Array,
    required: true
  },
  itinid: {
    type: String,
    required: true
  },
  itinname: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("comment", commentSchema);
