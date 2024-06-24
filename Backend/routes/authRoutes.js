const express = require("express");
const UserModel = require("../model/userModel");
const authRouter = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

authRouter.post("/login", async (req, res, next) => {
  try {
    //check if user exists
    const { email, password } = req.body;
    const userExists = await UserModel.findOne({ email }).select("+password");
    if (!userExists)
      return res.status(400).json({ message: "user does not exist" });

    // check if password is correct
    if (
      !userExists ||
      !(await userExists.correctPassword(password, userExists.password))
    ) {
      return next(new Error("Incorrect email or password", 401));
    }

    // generate access token
    const accessToken = jwt.sign(
      {
        id: userExists._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .json({ message: "user logged in", accessToken: accessToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = authRouter;
