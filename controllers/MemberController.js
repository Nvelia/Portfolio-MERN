const jwt = require("jwt-simple");
const config = require("./../config/keys");
const Member = require("./../models/Member");

function getTokenForMember(member) {
  const timeStamp = new Date().getTime();
  return jwt.encode(
    {
      sub: member.id,
      iat: timeStamp
    },
    config.secretOrKey
  );
}

exports.register = function(req, res) {
  // Actually only one member : admin. Registrations closed.
  Member.find().then(member => {
    if (member.length >= 1) {
      return res.status(422).json({ email: "Les inscriptions sont fermées." });
    }

    new Member({
      name: req.body.name,
      password: req.body.password
    })
      .save()
      .then(Member => res.json({ token: getTokenForMember(Member) }))
      .catch(err => console.log(err));
  });
};

exports.login = function(req, res) {
  res.json({ token: getTokenForMember(req.user) });
};
