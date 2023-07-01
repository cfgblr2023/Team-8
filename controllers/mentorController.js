const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Mentor = require("./../models/mentorModel");

exports.getMentor = catchAsync(async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id);
  // Tour.findOne({ _id: req.params.id })
  if (!mentor) {
    return next(new AppError("No mentor found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      mentor,
    },
  });
});

exports.createMentor = catchAsync(async (req, res, next) => {
  const newMentor = await Mentor.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      mentor: newMentor,
    },
  });
});
