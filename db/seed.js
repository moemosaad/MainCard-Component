const fs = require("fs");
const exec = require("child_process").execFile;
const cluster = require("cluster");
console.time("dbsave");
const split = require("split");
const Movie = require("../models/Movie.js");
// const newData = require("./generateData.js");
const db = require("./config.js");
// const dbPostGres = require("./seedPostgres.js");

var seedMongoData = callback => {
  let command =
    "mongoimport -d spottypotatoes -c movies --type csv --headerline --file ./newDataTest.csv";
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log("seeded data");
      // callback("newData.csv");
    }
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

module.exports = seedMongoData;
// module.exports = seedData(newData);
