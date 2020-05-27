const Image = require("../models/Image");
var fs = require("fs");

exports.add = function(req, res) {
  if (typeof req.files.image === "undefined") {
    return res
      .status(400)
      .json({ errorImage: "Joindre une image à la création." });
  }
  const imageFile = req.files.image;

  var oldpath = req.files.image.path;
  var newpath = "./client/public/images/" + req.files.image.name;

  fs.copyFile(oldpath, newpath, err => {
    if (err) throw err;
    console.log("Image added");
  });

  new Image({
    url: imageFile.name
  })
    .save()
    .then(Image => res.json(Image._id))
    .catch(err => console.log(err));
};

exports.fetchOne = function(req, res) {
  Image.findOne({ _id: req.params.id }).then(image => {
    if (image === null) {
      return res.status(400).json({ error: "Aucune image trouvée" });
    }

    res.json(image);
  });
};

exports.update = function(req, res) {
  if (req.files.image) {
    const imageFile = req.files.image;

    Image.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: imageFile.name,
          data: fs.readFileSync(imageFile.path),
          contentType: imageFile.type
        }
      }
    ).then(image => {
      if (image.nModified != 1) {
        return res
          .status(400)
          .json({ error: "La mise à jour ne s'est pas effectuée" });
      }
      res.json(image);
    });
  } else {
    Image.findOne({ _id: req.params.id }).then(image => {
      res.json(image);
    });
  }
};
