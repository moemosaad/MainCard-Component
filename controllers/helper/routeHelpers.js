module.exports = {
  mapData: data => {
    var newData = {
      _id: data.m,
      id: data.m,
      video: {
        title: data.title,
        year: data.year,
        video: data.video
      },
      poster: {
        image: data.picture
      },
      score: {
        all_critics: {
          tomatometer: data.all_critics_tomatometer,
          average_rating: data.all_critics_average_rating,
          reviews_counted: data.all_critics_reviews_counted,
          fresh: data.all_critics_fresh,
          rotten: data.all_critics_rotten
        },
        consensus: data.consensus,
        audience: {
          audience_score: data.audience_score,
          average_rating: data.audience_average_rating,
          user_rating: data.audience_user_rating
        },
        top_critics: {
          tomatometer: data.top_critics_tomatometer,
          average_rating: data.top_critics_average_rating,
          reviews_counted: data.top_critics_reviews_counted,
          fresh: data.top_critics_fresh,
          rotten: data.top_critics_rotten
        }
      }
    };

    return newData;
  }
};
