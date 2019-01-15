const { Pool } = require("pg");
const config = require("./config.js");

const pool = new Pool(config);

// client.connect((err, client, done) => {
//   console.log("ok1");
//   if (err) {
//     console.log("error:", err);
//   }
// });

module.exports = pool;
