const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Mentee = require("../models/menteeModel");

exports.getAllMentee = catchAsync(async (req, res, next) => {
  const mentee = await Mentee.find(req.params.id);
  // Tour.findOne({ _id: req.params.id })
  if (!mentee) {
    return next(new AppError("No mentee found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      mentee,
    },
  });
});

exports.getMentee = catchAsync(async (req, res, next) => {
  const mentee = await Mentee.findById(req.params.id);
  // Tour.findOne({ _id: req.params.id })
  if (!mentee) {
    return next(new AppError("No mentee found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      mentee,
    },
  });
});

exports.createMentee = catchAsync(async (req, res, next) => {
  const newMentee = await Mentee.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      mentee: newMentee,
    },
  });
});
