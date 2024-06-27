const express = require("express");
const router = express.Router();
const protect = require("../middleWares/authMiddleware");
const PatientContoller = require("../controller/PatientController");

router
  .route("/")
  .get(PatientContoller.getAllDocs)
  .post(PatientContoller.createDoc);
router.route("/:id").get(PatientContoller.getOne);
router.route("/:id").delete(PatientContoller.deleteOne);

module.exports = router;
