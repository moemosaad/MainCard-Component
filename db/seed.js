const fs = require("fs");
const { exec } = require("child_process");
const cluster = require("cluster");
const Movie = require("../models/Movie.js");
const db = require("./config.js");
const copyFrom = require("pg-copy-streams").from;
const postgres = require("./PostgreSQL/connectPostgres.js");

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

module.exports.seedMongoData = seedMongoData;
module.exports.seedPostgresData = seedPostgresData;
