const express = require("express");
const app = express();
const patientRouter = require("./routes/patientRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/errorController");
const glo = globalErrorHandler;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//api routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(glo);

module.exports = app;
