const fs = require("fs");
const Movie = require("../models/Movie.js");
const db = require("./config.js");
const sqlDb = require("./PostgreSQL/seedPostgres.js");
// const seedMongoData = require("./seed.js");
console.time("dbsave");
let data = JSON.parse(fs.readFileSync(__dirname + "/data.json").toString());

// console.log(data);
let dataInfo = {
  title: "video",
  year: "video",
  video: "video",
  image: "poster",
  tomatometer: ["score", "all_critics"],
  average_rating: ["score", "all_critics"],
  reviews_counted: ["score", "all_critics"],
  fresh: ["score", "all_critics"],
  rotten: ["score", "all_critics"],
  consensus: "score",
  audience_score: ["score", "audience"],
  user_ratings: ["score", "audience"]
};

let randomData = {};

var extractData = (infoObj, info) => {
  if (Array.isArray(infoObj)) {
    return data.map(item => item[infoObj[0]][infoObj[1]][info]);
  }
  return data.map(item => item[infoObj][info]);
};

var collectRandomData = () => {
  for (var key in dataInfo) {
    randomData[key] = extractData(dataInfo[key], key);
  }
};
var randomize = data => {
  let dataArr = randomData[data];
  return dataArr[Math.floor(Math.random() * Math.floor(dataArr.length))];
};

var decorateNewData = (newData, index) => {
  newData = {
    id: index,
    video: {
      title: randomize("title"),
      year: randomize("year"),
      video: randomize("video")
    },
    poster: {
      image: randomize("image")
    },
    score: {
      all_critics: {
        tomatometer: randomize("tomatometer"),
        average_rating: randomize("average_rating"),
        reviews_counted: randomize("reviews_counted"),
        fresh: randomize("fresh")
      },
      consensus: randomize("consensus"),
      audience: {
        audience_score: randomize("audience_score"),
        average_rating: randomize("average_rating"),
        user_ratings: randomize("user_ratings")
      },
      top_critics: {
        tomatometer: randomize("tomatometer"),
        average_rating: randomize("average_rating"),
        reviews_counted: randomize("reviews_counted"),
        fresh: randomize("fresh")
      }
    }
  };
  newData.score.all_critics.rotten =
    newData.score.top_critics.reviews_counted - newData.score.top_critics.fresh;
  newData.score.top_critics.rotten =
    newData.score.top_critics.reviews_counted - newData.score.top_critics.fresh;
  return newData;
};

var generateRandomData = () => {
  collectRandomData();
  fs.writeFile("./newData.csv", "", () => {
    var newData;
    var dataArr;
    var batchSize = 800;
    var limit = 1000000;
    var count = 0;
    // var total = 0;
    var start = 0;
    var end = batchSize;
    var batchData = "";
    var csvfile = fs.createWriteStream("./newData.csv");
    var storeBatch = () => {
      // dataArr = [];
      // for (var i = start + 101; i < end + 101; i++) {
      //   let index = i - 101;
      //   var decoratedData = decorateNewData(newData, i);
      //   dataArr.push(decoratedData);
      // }
      // Movie.collection.insertMany(dataArr, () => {
      //   if (total < limit - batchSize) {
      //     total += batchSize;
      //     console.log(start, end);
      //     storeBatch((start += batchSize), (end += batchSize));
      //   } else {
      //     console.log(start, end);
      //     console.timeEnd("dbsave");
      //     return;
      //   }
      // });
      var writeToFile = (newData, file, num, end) => {
        // if (num === 101) {
        //   // file.write("[" + JSON.stringify(newData) + ", ");
        //   batchData += JSON.stringify(newData) + ", ";
        //   console.log("ok");
        // } else
        if (num >= end - 1) {
          count++;
          console.log("ok");
          // file.write(JSON.stringify(newData) + "]");
          batchData += JSON.stringify(newData);
          file.write(batchData);
          console.timeEnd("dbsave");
          console.log(end, count);
          return;
        } else if (num % batchSize === 100) {
          count++;
          // file.write(JSON.stringify(newData) + ", ");
          batchData += JSON.stringify(newData) + "," + "\n";
          file.write(batchData);
          batchData = "";
        } else {
          count++;
          batchData += JSON.stringify(newData) + "," + "\n";
        }
      };
      for (var i = 101; i < limit + 101; i++) {
        // console.log("write to file");
        var decoratedData = decorateNewData(newData, i);
        writeToFile(decoratedData, csvfile, i, limit + 101);
      }
    };
    storeBatch();
    console.log("ok");
    csvfile.end(() => {
      console.log("end");
      return;
    });
  });
};

// generateRandomData();

// module.exports = generateRandomData();
