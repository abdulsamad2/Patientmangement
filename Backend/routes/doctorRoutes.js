const doctorController = require("../controller/doctorController");
const express = require("express");
const router = express.Router();
const { protect } = require("../middleWares/authMiddleware");

router
  .route("/")
  .get(doctorController.getAllDocs)
  .post(doctorController.createDoc);
router
  .route("/:id")
  .get(doctorController.getOne)
  .delete(protect, doctorController.deleteOne);

module.exports = router;
