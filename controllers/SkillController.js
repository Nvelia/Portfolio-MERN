const validateSkill = require("../validation/skill");
const Skill = require("../models/Skill");

exports.add = function (req, res) {
  const { errors, isValid } = validateSkill(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Skill.findOne({ name: req.body.name }).then((skill) => {
    if (skill) {
      return res.status(400).json({ error: "Cette compétence existe déjà." });
    }

    new Skill({
      name: req.body.name,
      level: req.body.level,
    })
      .save()
      .then((Skill) => res.json(Skill))
      .catch((err) => console.log(err));
  });
};

exports.fetchAll = function (req, res) {
  Skill.find().then((skills) => {
    if (skills[0] === null) {
      return res.status(400).json({ error: "Aucune compétence trouvée." });
    }

    res.json(skills);
  });
};

exports.delete = function (req, res) {
  Skill.deleteOne({ _id: req.params.id }).then((skill) => {
    if (skill.deletedCount != 1) {
      return res
        .status(400)
        .json({ error: "La supression n'a pas fonctionné." });
    }
    res.json("supprimé");
  });
};

exports.update = function (req, res) {
  Skill.updateOne({ _id: req.params.id }, { $set: req.body }).then((skill) => {
    if (skill.nModified != 1) {
      return res
        .status(400)
        .json({ error: "La mise à jour ne s'est pas effectuée" });
    }
    res.json("Mis à jour");
  });
};
