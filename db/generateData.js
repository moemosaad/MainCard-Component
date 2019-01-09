const fs = require("fs");

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
let newData = [];

var extractData = (infoObj, info) => {
  if (Array.isArray(infoObj)) {
    return data.map(item => item[infoObj[0]][infoObj[1]][info]);
  }
  return data.map(item => item[infoObj][info]);
};

var extractRandomData = () => {
  for (var key in dataInfo) {
    randomData[key] = extractData(dataInfo[key], key);
  }
};

var generateRandomData = () => {
  for (var i = 101; i < 30101; i++) {
    newData[i] = {
      id: i,
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
          fresh: randomize("fresh"),
          rotten: randomize("rotten")
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
          fresh: randomize("fresh"),
          rotten: randomize("rotten")
        }
      }
    };
  }
};

var randomize = data => {
  let dataArr = randomData[data];
  return dataArr[Math.floor(Math.random() * Math.floor(dataArr.length))];
};

extractRandomData();
generateRandomData();
module.exports = newData;
