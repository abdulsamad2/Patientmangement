const Patient = require("../model/patientModel");
const catchAsync = require("../utils/catchAsync");
const mongoose = require("mongoose");

exports.createPatient = catchAsync(async (req, res, next) => {
  const {
    name,
    email,
    phone,
    address,
    age,
    gender,
    bloodPressure,
    bloodGroup,
    disease,
  } = req.body;
  const patient = await Patient.create({
    name,
    email,
    phone,
    address,
    age,
    gender,
    bloodPressure,
    bloodGroup,
    disease,
  });
  res.status(201).json({
    status: "success",
    data: {
      patient,
    },
  });
});

exports.getAllPatients = catchAsync(async (req, res, next) => {
  const patients = await Patient.find();
  res.status(200).json({
    status: "success",
    results: patients.length,
    data: {
      patients,
    },
  });
});

exports.getPatient = catchAsync(async (req, res, next) => {
  console.log(req.params);
  const patient = await Patient.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      patient,
    },
  });
});

exports.updatePatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      patient,
    },
  });
});

exports.deletePatient = catchAsync(async (req, res, next) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
