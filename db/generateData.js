const fs = require("fs");
const Movie = require("../models/Movie.js");
// const db = require("./config.js");
// const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const Json2csvParser = require("json2csv").Parser;
// const sqlDb = require("./PostgreSQL/seedPostgres.js");
// const { seedMongoData, seedSQLData } = require("./seed.js");
// const seedMongoData = require("./seed.js");

console.time("dbsave");
let data = JSON.parse(fs.readFileSync(__dirname + "/data.json").toString());

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

const collectRandomData = () => {
  for (var key in dataInfo) {
    randomData[key] = extractData(dataInfo[key], key);
  }
};

const extractData = (infoObj, info) => {
  if (Array.isArray(infoObj)) {
    return data.map(item => item[infoObj[0]][infoObj[1]][info]);
  }
  return data.map(item => item[infoObj][info]);
};

const generateRandomData = () => {
  collectRandomData();

  const batchSize = 800;
  const limit = 1020;
  let idCount = 101;
  let headerFlag = false;
  fs.truncate("./newDataTest.csv", 0, () => {
    let csvfile = fs.createWriteStream("./newDataTest.csv");

    let writeBatchToFile = () => {
      let newData;
      let batchData = [];
      let batchStart = 0;

      if (idCount >= limit + 101) {
        return;
      }

      while (batchStart < batchSize && idCount < limit + 101) {
        let createdData = createNewData(newData, idCount);
        batchData.push(createdData);
        batchStart++;
        idCount++;
      }
      console.log(idCount - 101);

      batchData = convertJSONToCSV(batchData, headerFlag, idCount, limit);
      csvfile.write(batchData);

      if (!headerFlag) {
        headerFlag = !headerFlag;
      }

      writeBatchToFile();
    };

    writeBatchToFile();

    csvfile.end(() => {
      return;
    });

    csvfile.on("finish", () => {
      console.log("writes are now finished");
      console.timeEnd("dbsave");
      // seedMongoData(() => {
      //   fs.unlink("./newDataTest.csv", err => {
      //     if (err) {
      //       console.log("file unlink error: ", err);
      //     }
      //     console.log("deleted csv file");
      //     console.timeEnd("dbsave");
      //   });
      // });
    });
  });
};

const createNewData = (newData, index) => {
  newData = {
    movie_id: index,
    title: randomize("title"),
    year: randomize("year"),
    video: randomize("video"),
    picture: randomize("image"),
    all_critics_tomatometer: randomize("tomatometer"),
    all_critics_average_rating: randomize("average_rating"),
    all_critics_reviews_counted: randomize("reviews_counted"),
    all_critics_fresh: randomize("fresh"),
    consensus: randomize("consensus"),
    audience_score: randomize("audience_score"),
    average_rating: randomize("average_rating"),
    user_ratings: randomize("user_ratings"),
    top_critics_tomatometer: randomize("tomatometer"),
    top_critics_average_rating: randomize("average_rating"),
    top_critics_reviews_counted: randomize("reviews_counted"),
    top_critics_fresh: randomize("fresh")
  };
  newData.all_critics_rotten =
    newData.all_critics_reviews_counted - newData.all_critics_fresh;
  newData.top_critics_rotten =
    newData.top_critics_reviews_counted - newData.top_critics_fresh;
  return newData;
};

const randomize = data => {
  let dataArr = randomData[data];
  return dataArr[Math.floor(Math.random() * Math.floor(dataArr.length))];
};

const convertJSONToCSV = (batchData, headerFlag, count, limit) => {
  let json2csv;
  let transformOpts = { encoding: "utf8" };
  let fields = [
    "movie_id",
    "title",
    "year",
    "video",
    "picture",
    "all_critics_tomatometer",
    "all_critics_average_rating",
    "all_critics_reviews_counted",
    "all_critics_fresh",
    "all_critics_rotten",
    "consensus",
    "audience_score",
    "user_ratings",
    "top_critics_tomatometer",
    "top_critics_average_rating",
    "top_critics_reviews_counted",
    "top_critics_fresh",
    "top_critics_rotten"
  ];

  if (!headerFlag) {
    json2csv = new Json2csvParser({ fields }, transformOpts);
  } else if (headerFlag) {
    json2csv = new Json2csvParser({ fields, header: false }, transformOpts);
  }

  let csv = json2csv.parse(batchData);
  if (count < limit) {
    csv += "\n";
  }

  return csv;
};

generateRandomData();
module.exports = generateRandomData;

// var convertJSONtoCSVMongo = (batchData, current, end) => {
//   if (current >= end - 1) {
//     count++;
//     console.log("ok");
//     batchData += JSON.stringify(newData);

//     console.log(end, count);
//     return;
//   } else if (current % batchSize === 100) {
//     count++;
//     batchData += JSON.stringify(newData);
//     file.write(batchData);
//     batchData = "";
//   } else {
//     count++;
//     batchData += JSON.stringify(newData);
//   }
//   return batchData;
// };

//beneath storeBatch
// var storeBatch = () => {
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
// };

// beneath write to file
// if (num === 101) {
//   // file.write("[" + JSON.stringify(newData) + ", ");
//   batchData += JSON.stringify(newData) + ", ";
//   console.log("ok");
// } else
