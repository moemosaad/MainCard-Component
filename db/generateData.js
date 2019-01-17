const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const header = require("./header.js");
const { seedMongoData, seedPostgresData } = require("./seed.js");

console.time("Time to generate CSV data");
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
  const limit = 10000000;
  let idCount = 101;

  fs.truncate("./newDataTest.csv", 0, () => {
    const csvWriter = createCsvWriter({
      path: "./newDataTest.csv",
      header: header
    });

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

      csvWriter.writeRecords(batchData).then(() => {
        if (idCount === limit + 101) {
          console.timeEnd("Time to generate CSV data");
          // console.time("Time to seed Mongo"); //Uncomment both to seed mongo
          // seedMongo();
          console.time("Time to seed Postgres"); //Uncomment both to seed postgres
          seedPostgres();
        }
        writeBatchToFile();
      });
    };

    writeBatchToFile();
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
    audience_average_rating: randomize("average_rating"),
    audience_user_rating: randomize("user_ratings"),
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

const seedMongo = () => {
  seedMongoData(() => {
    console.timeEnd("Time to seed Mongo");
    fs.unlink("./newDataTest.csv", err => {
      if (err) {
        console.log("file unlink error: ", err);
      }
    });
  });
};

const seedPostgres = () => {
  seedPostgresData(() => {
    console.timeEnd("Time to seed Postgres");
    fs.unlink("./newDataTest.csv", err => {
      if (err) {
        console.log("file unlink error: ", err);
      }
      return;
    });
  });
};

generateRandomData();
module.exports = generateRandomData;
