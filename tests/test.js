import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import Rating from "../client/components/rating";
import Score from "../client/components/score";
import Poster from "../client/components/poster";

Enzyme.configure({ adapter: new Adapter() });

const movie = {
  id: 108,
  video: {
    title: "The Gaucho",
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

describe("Poster component", () => {
  test("Renders", () => {
    const wrapper = shallow(<Poster poster={movie.poster} />);
    expect(wrapper.exists()).toBe(true);
  });
  test("Displays Poster", () => {
    const wrapper = shallow(<Poster poster={movie.poster} />);
    expect(wrapper.find("#poster").prop("src")).toEqual(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2qgbwUkZMB6Z3KUBla8OIzYNOBzMaNpoAeNofRYZj8V27vwD"
    );
  });
});

describe("Score component", () => {
  test("Renders", () => {
    const wrapper = shallow(
      <Score score={movie.score} toggleTopCritics={() => {}} all={true} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("Toggles Top Critics", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Score score={movie.score} toggleTopCritics={spy} all={true} />
    );
    wrapper.find("#top").simulate("click");
    expect(spy.calledOnce).toBe(true);
  });
});

import regeneratorRuntime from "regenerator-runtime";

const request = require("supertest");
const app = require("../app.js");
const db = require("../db/config.js");

describe("API Requests", () => {
  test("Should make a GET request", async () => {
    const response = await request(app).get(`/movies/${108}`);
    const body = JSON.parse(response.text);
    expect(body[0].video.title).toBe("The Gaucho");
  });
});

const puppeteer = require("puppeteer");

describe("End to end test", () => {
  test("click handler works", async () => {
    let server = await app.listen(process.env.PORT || 9001);
    let browser = await puppeteer.launch({
      headless: true
    });
    let page = await browser.newPage();
    await page.goto("http://localhost:9001/");
    await page.waitForSelector("#top");
    await page.click("#top");
    const html = await page.$eval("#top_tomatometer", e => e.innerHTML);
    expect(html).toBe("94");
    browser.close();
    server.close();
  }, 2000000);
});
