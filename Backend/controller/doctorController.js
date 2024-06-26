const Doctor = require("../model/doctorModel");
const factory = require("../utils/factory");

exports.getAllDocs = factory(Doctor).getAllDocs;
exports.createDoc = factory(Doctor).createDoc;
exports.getOne = factory(Doctor).getOne;
exports.updateOne = factory(Doctor).updateOne;
exports.deleteOne = factory(Doctor).deleteOne;
