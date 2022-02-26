require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/UserRoute");

mongoose.connect(process.env.DB).then(() => {
  console.log("CONNECTED TO DB");
});

app.use(express.json());

app.use("/api", userRoutes);

app.listen(3030, () => {
  console.log(`app is running on port 3030`);
});