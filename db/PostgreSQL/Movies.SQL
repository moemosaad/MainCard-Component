DROP DATABASE IF EXISTS spottypotatoes;
DROP TABLE IF EXISTS movies;

CREATE DATABASE spottypotatoes;
\c spottypotatoes;

CREATE TABLE movies (
    m INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(255) NOT NULL,
    video VARCHAR(255) NOT NULL,
    picture VARCHAR(255) NOT NULL,
    all_critics_tomatometer INT NOT NULL,
    all_critics_average_rating DOUBLE PRECISION NOT NULL,
    all_critics_reviews_counted INT NOT NULL,
    all_critics_fresh INT NOT NULL,
    all_critics_rotten INT NOT NULL,
    consensus TEXT NOT NULL,        
    audience_score INT NOT NULL,
    audience_average_rating DOUBLE PRECISION NOT NULL,
    audience_user_rating INT NOT NULL,
    top_critics_tomatometer INT NOT NULL,
    top_critics_average_rating DOUBLE PRECISION NOT NULL,
    top_critics_reviews_counted INT NOT NULL,
    top_critics_fresh INT NOT NULL,
    top_critics_rotten INT NOT NULL,
    PRIMARY KEY (m)
);

SELECT COUNT(*) FROM movies;