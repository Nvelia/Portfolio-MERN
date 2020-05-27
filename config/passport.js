const passport = require("passport");
const Member = require("./../models/Member");
const config = require("./../config/keys");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: config.secretOrKey,
};

const jwtAuth = new JwtStrategy(jwtOptions, function (payload, done) {
  const memberId = payload.sub;
  Member.findById(memberId)
    .then((member) => {
      if (!member) {
        return done(null, false);
      }
      return done(null, member);
    })
    .catch((err) => console.log(err));
});

const localOptions = {
  usernameField: "name",
};

const localLoginStrategy = new LocalStrategy(localOptions, function (
  name,
  password,
  done
) {
  Member.findOne({ name }, function (err, member) {
    if (err) return done(err);
    if (!member) return done(null, false);

    member.comparePasswords(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }
      return done(null, member);
    });
  });
});

passport.use(jwtAuth);
passport.use(localLoginStrategy);
