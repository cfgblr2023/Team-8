const mongoose = require("mongoose");
// const slugify = require("slugify");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Mentor must have a name"],
    validate: [validator.isAlpha, "User name must only contain characters"],
  },
  email: {
    type: String,
    required: [true, "A User must have a email address"],
    unique: true,
    validate: [validator.isEmail, "User mail is incorrect"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
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
  skills: {
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
  availability: {
    type: Date,
    required: true,
  },
  available_status: {
    type: Boolean,
  },
});

mentorSchema.pre("save", async function (next) {
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete passwordConfirm field
  next();
});

mentorSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Mentor = mongoose.model("Mentor", mentorSchema);
module.exports = Mentor;
