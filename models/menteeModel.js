const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const menteeSchema = new mongoose.Schema({
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
  availability: {
    type: Date,
    required: true,
  },
});

menteeSchema.pre("save", async function (next) {
  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // Delete passwordConfirm field
  next();
});

menteeSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Mentee = mongoose.model("Mentee", menteeSchema);
module.exports = Mentee;
