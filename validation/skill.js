const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.level = !isEmpty(data.level) ? data.level : "";

  // Content checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Saisir un nom pour la compétence.";
  }

  if (!Validator.isInt(data.level, { min: 1, max: 5 })) {
    errors.level = "Le niveau doit être compris entre 1 et 5";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
