const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const protect = require("../middleWares/authMiddleware");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/:id").delete(protect.protect, userController.deleteUser);

module.exports = router;
