const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");

exports.createUser = catchAsync(async (req, res, next) => {
  const { gender, name, email, password, passwordConfirm, role } = req.body;
  if (req.body.password !== req.body.passwordConfirm) {
    return next(new Error("Passwords are not the same!", 400));
  }
  const user = await User.create({
    name,
    email,
    password,
    passwordConfirm,
    role,
    gender,
  }).then((user) => user.json());

  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
