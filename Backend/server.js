const app = require("./app");

const morgan = require("morgan");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
app.use(morgan("dev"));
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
