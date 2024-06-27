const Patient = require("../model/patientModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("../utils/factory");

exports.getAllDocs = factory(Patient).getAllDocs;
exports.createDoc = factory(Patient).createDoc;
exports.getOne = factory(Patient).getOne;
exports.updateOne = factory(Patient).updateOne;
exports.deleteOne = factory(Patient).deleteOne;
