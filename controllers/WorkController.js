const validateWork = require("../validation/work");
const Work = require("../models/Work");

exports.add = function(req, res) {
  const { errors, isValid } = validateWork(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Work.findOne({ name: req.body.name }).then(work => {
    if (work) {
      return res.status(400).json({ title: "Ce nom existe déjà." });
    }

    new Work({
      name: req.body.name,
      content: req.body.content,
      github: req.body.github,
      link: req.body.link,
      category: req.body.category,
      image: req.body.image
    })
      .save()
      .then(Work => res.json(Work))
      .catch(err => console.log(err));
  });
};

exports.fetchAll = function(req, res) {
  Work.find().then(works => {
    if (works[0] === null) {
      return res.status(400).json({ error: "Aucune création trouvée." });
    }

    res.json(works);
  });
};

exports.delete = function(req, res) {
  Work.deleteOne({ _id: req.params.id }).then(work => {
    if (work.deletedCount != 1) {
      return res
        .status(400)
        .json({ error: "La supression n'a pas fonctionné." });
    }
    res.json("supprimé");
  });
};

exports.update = function(req, res) {
  Work.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        content: req.body.content,
        github: req.body.github,
        link: req.body.link,
        category: req.body.category,
        image: req.body.image
      }
    }
  ).then(work => {
    console.log("ok");
    if (work.nModified != 1) {
      res.json("La mise à jour ne s'est pas effectuée");
    }
    res.json("Mis à jour");
  });
};
