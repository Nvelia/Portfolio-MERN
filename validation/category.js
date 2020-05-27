const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";

  // Content checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Veuillez saisir un nom pour la catégorie.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
