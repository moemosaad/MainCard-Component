const { Client } = require("pg");
const config = require("./config.js");
const fs = require("fs");
const generateRandomData = require("../generateData.js");

// let sql = fs.readFileSync("Movies.SQL").toString();
const client = new Client(config);

// generateRandomData();
client.connect((err, client, done) => {
  console.log("ok1");
  if (err) {
    console.log("error:", err);
  }
  // let sql =
  //   "\\copy movies (movie_id, title, year, video, picture, all_critics_tomatometer, all_critics_average_rating, all_critics_reviews_counted, all_critics_fresh, all_critics_rotten, consensus, audience_score, user_ratings, top_critics_tomatometer, top_critics_average_rating, top_critics_reviews_counted, top_critics_fresh, top_critics_rotten) FROM '../newDataTest.csv' CSV HEADER";
  // console.log(sql);
  // client.query(sql, (err, result) => {
  //   console.log("ok2");
  //   // done();
  //   if (err) {
  //     console.log("err: ", err);
  //   }
  // });
});

module.exports = client;
