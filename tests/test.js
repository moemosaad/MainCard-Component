import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Rating from "../client/components/rating";
import Score from "../client/components/score";
import Poster from "../client/components/poster";

Enzyme.configure({ adapter: new Adapter() });

const movie = {
  id: 108,
  video: {
    title: "Gaucho, The",
    year: 1996,
    video: "https://www.youtube.com/watch?v=1ywA8TtwJ50"
  },
  poster: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2qgbwUkZMB6Z3KUBla8OIzYNOBzMaNpoAeNofRYZj8V27vwD"
  },
  score: {
    all_critics: {
      tomatometer: 2,
      average_rating: 3.6,
      reviews_counted: 2409,
      fresh: 54,
      rotten: 2355
    },
    consensus:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    audience: {
      audience_score: 32,
      average_rating: 1.6,
      user_ratings: 8363
    },
    top_critics: {
      tomatometer: 94,
      average_rating: 4.7,
      reviews_counted: 2147,
      fresh: 48,
      rotten: 2099
    }
  }
};

describe("Rating component", () => {
  test("Renders", () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.exists()).toBe(true);
  });
});

// describe("")

// describe("Score component", () => {
//   test("Renders", () => {
//     const wrapper = shallow(
//       <Score score={movie.score} toggleTopCritics={() => {}} all={true} />
//     );
//     wrapper.find("#top").simulate("click");
//     expect(wrapper.find("#top_tomatometer").props().textAnchor).toEqual("94");
//   });
// });

// beforeAll(() => {
//   const app = require("express")();
//   app.listen(8080);
//   const mongoose = require("mongoose");
//   const db = mongoose.connect(
//     "mongodb://localhost/spottypotatoes",
//     { useNewUrlParser: true }
//   );
//   const Movie = require("../models/Movie.js");
// });

// afterAll(() => {});

// describe("connects to database", () => {
//   it("retrieves all movies from database", async () => {
//     let Movies = await Movie.find({}).exec();
//     expect(Movies.length).toEqual(100);
//   });
// });
