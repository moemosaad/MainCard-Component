const dotenv = require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./db/config.js");

//uncomment to seed data
const seed = require("./db/seed.js");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const routes = require("./routes/routes.js");

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
