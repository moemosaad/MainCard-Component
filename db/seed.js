const fs = require("fs");
const { exec } = require("child_process");
const cluster = require("cluster");
console.time("dbsave");
const split = require("split");
const Movie = require("../models/Movie.js");
// const newData = require("./generateData.js");
const db = require("./config.js");
const postgresClient = require("./PostgreSQL/connectPostgres.js");

const seedMongoData = callback => {
  let command =
    "mongoimport -d spottypotatoes -c movies --type csv --headerline --numInsertionWorkers 4 --file  ./newDataTest.csv";
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log("seeded data");
    callback();
  });
};

const createSQLDatabase = () => {};

const seedSQLData = callback => {
  // let stream = postgresClient.query(copyFrom("COPY movie from STDIN"));
  // fileStream = fs.createReadStream("newDataTest.csv");
  // fileStream.on("error", done);
  // stream.on("error", done);
  // stream.on("end", done);
  // fileStream.pipe(stream);
  let sql = fs.readFileSync("./Postgres/Movies.SQL").toString();
  postgresClient.query(sql, (err, result) => {
    console.log("ok2");
    // done();
    if (err) {
      console.log("err: ", err);
    }
    callback();
  });
};

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
module.exports.seedSQLData = seedSQLData;
// module.exports = seedData(newData);
