const fs = require("fs");
const v8 = require("v8");
const cluster = require("cluster");
console.time("dbsave");
const Movie = require("../models/Movie.js");
const newData = require("./generateData.js");
const db = require("./config.js");
v8.setFlagsFromString("--max-old-space-size=4096");
// const dbPostGres = require("./seedPostgres.js");

// let data = fs.readFileSync(__dirname + "/data.json");

console.log(newData.length);
const seedDataMongo = data => {
  let numCores = require("os").cpus().length;
  let start = 0;
  let batchSize = 800;
  let end = batchSize;

  console.log(numCores);
  var setUpWorkerProcesses = () => {
    if (cluster.isMaster) {
      for (let i = 0; i < numCores; i++) {
        cluster.fork();
      }
      cluster.on("exit", function(worker, code, signal) {
        console.log(`worker ${worker.process.pid} died`);
      });
    }
  };

  var storeBatch = () => {
    console.log(start, end, data.length);
    var dataBatch = data.slice(start, end);
    Movie.collection.insertMany(dataBatch, () => {
      if (start < data.length) {
        storeBatch((start += batchSize), (end += batchSize));
      } else {
        console.timeEnd("dbsave");
      }
    });
  };
  // setUpWorkerProcesses();
  storeBatch(start, end);
};

seedDataMongo(newData);
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

// Promise.all(
//   data.map(movie => {
//     return Movie.findOneAndUpdate(
//       { id: movie.id },
//       {
//         id: movie.id,
//         video: {
//           title: movie.video.title,
//           year: movie.video.year,
//           video: movie.video.video
//         },
//         poster: {
//           image: movie.poster.image
//         },
//         score: {
//           all_critics: {
//             tomatometer: movie.score.all_critics.tomatometer,
//             average_rating: movie.score.all_critics.average_rating,
//             reviews_counted: movie.score.all_critics.reviews_counted,
//             fresh: movie.score.all_critics.fresh,
//             rotten: movie.score.all_critics.rotten
//           },
//           consensus: movie.score.consensus,
//           audience: {
//             audience_score: movie.score.audience.audience_score,
//             average_rating: movie.score.audience.average_rating,
//             user_ratings: movie.score.audience.user_ratings
//           },
//           top_critics: {
//             tomatometer: movie.score.top_critics.tomatometer,
//             average_rating: movie.score.top_critics.average_rating,
//             reviews_counted: movie.score.top_critics.reviews_counted,
//             fresh: movie.score.top_critics.fresh,
//             rotten: movie.score.top_critics.rotten
//           }
//         }
//       },
//       {
//         upsert: true
//       }
//     ).exec();
//   })
// )
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.error(err);
//   })
// };

// module.exports = seedData(newData);
