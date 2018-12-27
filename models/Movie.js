const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  id: String,
  video: {
    title: String,
    year: String,
    video: String
  },
  poster: {
    image: String
  },
  score: {
    all_critics: {
      tomatometer: String,
      average_rating: String,
      reviews_counted: String,
      fresh: String,
      rotten: String
    },
    consensus: String,
    audience: {
      audience_score: String,
      average_rating: String,
      user_ratings: String
    },
    top_critics: {
      tomatometer: String,
      average_rating: String,
      reviews_counted: String,
      fresh: String,
      rotten: String
    }
  }
});
const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
