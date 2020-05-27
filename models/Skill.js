const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const SkillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
});
module.exports = Skill = mongoose.model("skills", SkillSchema);
