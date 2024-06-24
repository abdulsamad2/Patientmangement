const express = require("express");
const router = express.Router();
const PatientContoller = require("../controller/PatientController");

router
  .route("/")
  .get(PatientContoller.getAllPatients)
  .post(PatientContoller.createPatient);

module.exports = router;
