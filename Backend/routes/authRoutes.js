const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authController = require("../controller/authController");

router.route("/").post(userController.createUser);
router.route("/login").post(authController.userLogin);

module.exports = router;
