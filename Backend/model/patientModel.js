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
  age: Number,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  bloodPressure: String,
  bloodGroup: String,
  disease: String,
});

module.exports = mongoose.model("patient", patientSchema);
