const express = require("express");
const app = express();
const patientRouter = require("./routes/patientRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//api routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
