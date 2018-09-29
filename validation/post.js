const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.titlephoto = !isEmpty(data.titlephoto) ? data.titlephoto : "";
  data.sections = !isEmpty(data.sections) ? data.sections : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.thumbnail = !isEmpty(data.thumbnail) ? data.thumbnail : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.titlephoto)) {
    errors.titlephoto = "Title photo field is required";
  }

  if (Validator.isEmpty(data.sections)) {
    errors.sections = "Sections field is required";
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = "Author field is required";
  }

  if (Validator.isEmpty(data.thumbnail)) {
    errors.thumbnail = "Thumbnail photo field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
