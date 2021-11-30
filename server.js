const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Connect Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

//Route api/projects
app.use("/api/projects", require("./routes/projects"));

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404).type("text").send("Not Found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
