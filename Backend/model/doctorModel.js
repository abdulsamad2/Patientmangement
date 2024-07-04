const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
<<<<<<< HEAD
  specialties: {
    type: String,
    required: true,
  },

  education: {
    type: String,
    required: true,
  },

  workExperience: {
    type: String,
    required: true,
  },

=======
  specialties:{
    type:String
  },

 
>>>>>>> 043fed7b483c99d3a03cba7b46256ecf2c562449
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
