const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  id: Number,
  movie: {
    title: String,
    year: Number,
    image: String,
    video: String
  },
  critics_consensus: String,
  critic: {
    tomatometer: Number,
    tomatometer_average_rating: Number,
    reviews_counted: Number,
    fresh: Number,
    rotten: Number
  },
  audience: {
    audience_score: Number,
    audience_score_average_rating: Number,
    user_ratings: Number
  }
});

module.exports = Movie = mongoose.model("movie", movieSchema);
