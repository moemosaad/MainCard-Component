const fs = require("fs");
const Movie = require("../models/Movie.js");

let data = fs.readFileSync(__dirname + "/data.json");
const seedData = data => {
  Promise.all(
    data.map(movie => {
      return Movie.findOneAndUpdate(
        { id: movie.id },
        {
          id: movie.id,
          video: {
            title: movie.video.title,
            year: movie.video.year,
            video: movie.video.video
          },
          poster: {
            image: movie.poster.image
          },
          score: {
            all_critics: {
              tomatometer: movie.score.all_critics.tomatometer,
              average_rating: movie.score.all_critics.average_rating,
              reviews_counted: movie.score.all_critics.reviews_counted,
              fresh: movie.score.all_critics.fresh,
              rotten: movie.score.all_critics.rotten
            },
            consensus: movie.score.consensus,
            audience: {
              audience_score: movie.score.audience.audience_score,
              average_rating: movie.score.audience.average_rating,
              user_ratings: movie.score.audience.user_ratings
            },
            top_critics: {
                tomatometer: movie.score.top_critics.tomatometer,
                average_rating: movie.score.top_critics.average_rating,
                reviews_counted: movie.score.top_critics.reviews_counted,
                fresh: movie.score.top_critics.fresh,
                rotten: movie.score.top_critics.rotten
              }
          }
        },
        {
          upsert: true
        }
      ).exec();
    })
  )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = seedData(JSON.parse(data.toString()));
