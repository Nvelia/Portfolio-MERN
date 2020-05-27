const validateCategory = require("../validation/category");
const Category = require("../models/Category");

exports.add = function(req, res) {
  const { errors, isValid } = validateCategory(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Category.findOne({ name: req.body.name }).then(category => {
    if (category) {
      return res.status(400).json({ error: "Cette catégorie existe déjà" });
    }

    new Category({
      name: req.body.name
    })
      .save()
      .then(Category => res.json(Category))
      .catch(err => console.log(err));
  });
};

exports.fetchAll = function(req, res) {
  Category.find().then(categories => {
    if (categories[0] === null) {
      return res.status(400).json({ error: "Aucune catégorie trouvée" });
    }

    res.json(categories);
  });
};

exports.delete = function(req, res) {
  Category.deleteOne({ _id: req.params.id }).then(category => {
    if (category.deletedCount != 1) {
      return res
        .status(400)
        .json({ error: "La supression n'a pas fonctionné." });
    }
    res.json("supprimé");
  });
};

exports.update = function(req, res) {
  Category.updateOne(
    { _id: req.params.id },
    { $set: { name: req.body.name } }
  ).then(category => {
    if (category.nModified != 1) {
      return res
        .status(400)
        .json({ error: "La mise à jour ne s'est pas effectuée" });
    }
    res.json("Mis à jour");
  });
};
