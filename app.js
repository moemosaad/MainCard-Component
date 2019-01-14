require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const app = express();

const db = require("./db/config.js");

//uncomment to seed data
// const seed = require("./db/seed.js");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(compression());

const routes = require("./routes/routes.js");

app.use("/movies", routes);

module.exports = app;
//exported so tests can be run without starting server
