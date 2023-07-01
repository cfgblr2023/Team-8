const mongoose = require("mongoose");
// const slugify = require("slugify");
const validator = require("validator");

const mentorSchema = new mongoose.Schema({
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
    min: 10,
    max: 10,
    validate: [validator.isNumeric, "Phone number must contain only digits"],
  },
  dob: {
    type: Date,
    required: true,
  },
  educational_background: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
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
  available_status:{
    type: Boolean,
    required: true,
  }
});

const Mentor = mongoose.model("Mentor", mentorSchema);
module.exports = Mentor;
