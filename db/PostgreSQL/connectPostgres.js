const { Client } = require("pg");
const config = require("./config.js");
const fs = require("fs");

let sql = fs.readFileSync("Movies.SQL").toString();
// console.log(sql);
const client = new Client(config);

client.connect((err, client, done) => {
  console.log("ok1");
  if (err) {
    console.log("error:", err);
  }
  client.query(sql, (err, result) => {
    console.log("ok2");
    // done();
    if (err) {
      console.log("err: ", err);
    }
  });
});

module.exports = client;
