const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const WorkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  // image: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Image"
  // },
  image: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});
module.exports = Work = mongoose.model("works", WorkSchema);
