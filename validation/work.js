const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.content = !isEmpty(data.content) ? data.content : "";
  data.github = !isEmpty(data.github) ? data.github : "";
  data.link = !isEmpty(data.link) ? data.link : "";

  // Title checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Saisir un nom pour la création.";
  }
  // Chapter limit checks
  if (Validator.isEmpty(data.content)) {
    errors.content = "Saisir une description.";
  }

  // Chapter limit checks
  if (Validator.isEmpty(data.github)) {
    errors.github = "Saisir un lien github.";
  }

  // Chapter limit checks
  if (Validator.isEmpty(data.link)) {
    errors.link = "Saisir un lien.";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
