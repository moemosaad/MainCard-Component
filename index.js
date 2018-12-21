const dotenv = require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const db = require("./db/config.js");

//uncomment to seed data
// const seed = require("./db/seed.js");

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const routes = require("./routes/routes.js");

app.use("/movies", routes);

const port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
