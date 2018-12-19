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
          movie: {
            title: movie.movie.title,
            year: movie.movie.year,
            image: movie.movie.image,
            video: movie.movie.video
          },
          critics_consensus: movie.critics_consensus,
          critic: {
            tomatometer: movie.critic.tomatometer,
            tomatometer_average_rating: movie.critic.tomatometer_average_rating,
            reviews_counted: movie.critic.reviews_counted,
            fresh: movie.critic.fresh,
            rotten: movie.critic.rotten
          },
          audience: {
            audience_score: movie.audience.audience_score,
            audience_score_average_rating:
              movie.audience.audience_score_average_rating,
            user_ratings: movie.audience.user_ratings
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
