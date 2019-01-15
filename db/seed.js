const fs = require("fs");
const { exec } = require("child_process");
const cluster = require("cluster");
const split = require("split");
const Movie = require("../models/Movie.js");
const db = require("./config.js");
const path = require("path");
// const pg = require("pg");
const copyFrom = require("pg-copy-streams").from;
const postgres = require("./PostgreSQL/connectPostgres.js");
const config = require("./PostgreSQL/config.js");

const seedMongoData = callback => {
  let command =
    "mongoimport -d spottypotatoes -c movies --type csv --headerline --numInsertionWorkers 4 --file  ./newDataTest.csv";
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    callback();
  });
};

const seedPostgresData = callback => {
  postgres.connect((err, client, done) => {
    if (err) {
      console.log(err);
    }

    let stream = client.query(copyFrom("COPY movies FROM STDIN CSV HEADER"));
    let fileStream = fs.createReadStream("newDataTest.csv");

    fileStream.on("error", done);
    stream.on("error", err => {
      console.log("Error1:", err);
      done();
    });
    stream.on("end", err => {
      callback();
      indexPostgresData();
      done();
    });
    fileStream.pipe(stream);
  });
};

const indexPostgresData = () => {
  console.time("Time to index Postgres");
  let queryStr =
    "CREATE UNIQUE INDEX CONCURRENTLY m ON movies (m) WITH (fillfactor = 70)";
  postgres.query(queryStr, (err, data) => {
    if (err) {
      console.log("Postgres query error: ", err);
    } else {
      console.timeEnd("Time to index Postgres");
    }
  });
};

// postgres.query(
//   `COPY movies (m_id, title, year, video, picture, all_critics_tomatometer, all_critics_average_rating, all_critics_reviews_counted, all_critics_fresh, all_critics_rotten, consensus, audience_score, user_ratings, top_critics_tomatometer, top_critics_average_rating, top_critics_reviews_counted, top_critics_fresh, top_critics_rotten) newDataTest.csv CSV HEADER`,
//   (err, data) => {
//     if (err) {
//       console.log("Postgres query error: ", err);
//     } else {
//       callback();
//     }
//   }
// );

// query(query, (err, result) => {
//   console.log("ok2");
//   // done();
//   if (err) {
//     console.log("err: ", err);
//   }
//   callback();
// });

// JSON.parse(fs.readFileSync(__dirname + "/newData.csv", "utf-8"));
// console.log(data);
// console.log(data.length);
// const seedDataMongo = data => {
// let numCores = require("os").cpus().length;
// const seedDataMongo = (start, end, batchSize, data) => {
//   // let start = 0;
//   // let batchSize = 800;
//   // let end = batchSize;

//   var storeBatch = () => {
//     console.log(start, end, data.length);
//     var dataBatch = data.slice(start, end);
//     console.log(dataBatch.length);
//     Movie.collection.insertMany(dataBatch, () => {
//       if (start < data.length) {
//         storeBatch((start += batchSize), (end += batchSize));
//       } else if (start >= data.length) {
//         console.timeEnd("dbsave");
//       }
//     });
//   };
//   // setUpWorkerProcesses();
//   // storeBatch(start, end);
// };

// seedDataMongo(data);
// for (var start = 0; start < data.length; start += 800) {
//   var end = start + 800;
//   console.log(start, end);
// await
// Movie.insertMany(data.slice(start, end));
// .then(() => {
//   console.log(start, "was inserted");
// })
// .catch(err => {
//   console.log(err);
// });
// }

// let numCores = require("os").cpus().length;
// var setUpWorkerProcesses = () => {
//   if (cluster.isMaster) {
//     for (let i = 0; i < numCores; i++) {
//       cluster.fork();
//     }
//     cluster.on("exit", function(worker, code, signal) {
//       console.log(`worker ${worker.process.pid} died`);
//     });
//   }
// };
// setUpWorkerProcesses();

// var setUpWorkerProcesses = () => {
//   if (cluster.isMaster) {
//     for (let i = 0; i < numCores; i++) {
//       cluster.fork();
//     }
//     cluster.on("exit", function(worker, code, signal) {
//       console.log(`worker ${worker.process.pid} died`);
//     });
//   }
// };

module.exports.seedMongoData = seedMongoData;
module.exports.seedPostgresData = seedPostgresData;
// module.exports = seedData(newData);
