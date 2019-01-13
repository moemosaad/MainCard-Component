DROP DATABASE IF EXISTS spottypotatoes;

CREATE DATABASE spottypotatoes;

CREATE TABLE movie (
    id SERIAL,
    movie_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(255) NOT NULL,
    video VARCHAR(255) NOT NULL,
    picture VARCHAR(255) NOT NULL,
    all_critics_tomatometer INT NOT NULL,
    all_critics_average_rating INT NOT NULL,
    all_critics_reviews_counted INT NOT NULL,
    all_critics_fresh INT NOT NULL,
    all_critics_rotten INT NOT NULL,
    consensus VARCHAR(255) NOT NULL,
    audience_score INT NOT NULL,
    audience_average_rating INT NOT NULL,
    user_ratings INT NOT NULL,
    top_critics_tomatometer INT NOT NULL,
    top_critics_average_rating INT NOT NULL,
    top_critics_reviews_counted INT NOT NULL,
    top_critics_fresh INT NOT NULL,
    top_critics_rotten INT NOT NULL,
    PRIMARY KEY (id)
);

