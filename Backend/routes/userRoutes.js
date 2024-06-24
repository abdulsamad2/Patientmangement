const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const passport = require("passport");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .delete(
    passport.authenticate("jwt", { session: false }),
    userController.deleteUser
  );

module.exports = router;
