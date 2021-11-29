const express = require("express");
const cors = require("cors");
require("dotenv").config();

let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
