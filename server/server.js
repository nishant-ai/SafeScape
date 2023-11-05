const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

// App Config
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    //   origin: process.env.NODE_ENV === 'production' ? [CLIENT_URL, ADMIN_URL] : '*',
  })
);

require("./models/database/connection");

//make a route to write hello world
app.get("/", async (req, res) => {
  res.send(`Team Zero API!`);
});

// Routes
const userRoutes = require("./routes/user");
const crimeRoutes = require("./routes/crime");
const locationRoutes = require("./routes/location");

app.use("/user", userRoutes);
app.use("/crime", crimeRoutes);
app.use("/location", locationRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🔌 Server Listening At ${PORT}`);
});
