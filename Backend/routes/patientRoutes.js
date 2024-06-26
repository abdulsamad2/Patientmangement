const express = require("express");
const router = express.Router();
const PatientContoller = require("../controller/PatientController");
const protect = require("../middleWares/authMiddleware");
router
  .route("/")
  .get(protect.protect, PatientContoller.getAllPatients)
  .post(PatientContoller.createPatient);

router.route("/:id").get(PatientContoller.getPatient);

module.exports = router;
