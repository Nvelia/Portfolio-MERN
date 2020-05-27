const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;
// Create Schema
const MemberSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

MemberSchema.pre("save", function(next) {
  const member = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(member.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      member.password = hash;
      next();
    });
  });
});

MemberSchema.methods.comparePasswords = function(externalPassword, done) {
  bcrypt.compare(externalPassword, this.password, function(err, isMatch) {
    if (err) {
      return done(err);
    }
    done(null, isMatch);
  });
};

module.exports = Member = mongoose.model("members", MemberSchema);
