const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: String,
  dateOfBirth: { type: Date, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  type: { type: String, required: true },
  status: { type: String, required: true },
  lastVisitDate: { type: Date, required: true },
  balanceDue: { type: String, required: true },
  emergencyContact: String,
  bloodPressure: String,
  bloodGroup: String,
  disease: String,
});

module.exports = mongoose.model("patient", patientSchema);
