const mongoose = require("mongoose");
// const slugify = require("slugify");
const validator = require("validator");

const menteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mentor must have a name"],
    validate: [validator.isAlpha, "User name must only contain characters"],
    match: /^[a-zA-Z\s]+$/,
  },
  email: {
    type: String,
    required: [true, "A User must have a email address"],
    unique: true,
    validate: [validator.isEmail, "User mail is incorrect"],
  },
  phone: {
    type: String,
    required: [true, "A User must have a phone number"],
    validate: [validator.isNumeric, "Phone number must contain only digits"],
  },
  language: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  educational_status: {
    type: String,
    required: true,
  },
  school_address: {
    type: String,
    required: true,
  },
  residence_address: {
    type: String,
    required: true,
  },
  program_name: {
    type: String,
    required: true,
  },
  support_area: {
    type: String,
    required: true,
  },
  // availability: {
  //   date: {
  //     type: Date,
  //     required: true,
  //   },
  //   time: {
  //     type: String,
  //     required: true,
  //   },
  // },
});

const Mentee = mongoose.model("Mentee", menteeSchema);
module.exports = Mentee;
