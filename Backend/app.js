const express = require("express");
const app = express();
const patientRouter = require("./routes/patientRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const { errorHandler } = require("./middleWares/errorMiddleware");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//api routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/users", userRouter);

//error handler
app.use(errorHandler);
module.exports = app;
