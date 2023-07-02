const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Admin = require("./../models/adminModel");

exports.createAdmin = catchAsync(async (req, res, next) => {
  const newAdmin = await Admin.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      admin: newAdmin,
    },
  });
});
