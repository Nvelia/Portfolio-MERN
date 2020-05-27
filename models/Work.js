const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const WorkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});
module.exports = Work = mongoose.model("works", WorkSchema);
