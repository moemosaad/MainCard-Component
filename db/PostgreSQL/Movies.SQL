
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
    user_ratings INT NOT NULL,
    top_critics_tomatometer INT NOT NULL,
    top_critics_average_rating DOUBLE PRECISION NOT NULL,
    top_critics_reviews_counted INT NOT NULL,
    top_critics_fresh INT NOT NULL,
    top_critics_rotten INT NOT NULL,
    PRIMARY KEY (m)
);

-- \COPY movies (m_id, title, year, video, picture, all_critics_tomatometer, all_critics_average_rating, all_critics_reviews_counted, all_critics_fresh, all_critics_rotten, consensus, audience_score, user_ratings, top_critics_tomatometer, top_critics_average_rating, top_critics_reviews_counted, top_critics_fresh, top_critics_rotten) FROM 'C:\Users\user\Documents\Programming\HackReactor\SystemDesignCapstone\MainCard-Component\db\newDataTest.csv' CSV HEADER;

-- \copy movies (m_id, title, year, video, picture, all_critics_tomatometer, all_critics_average_rating, all_critics_reviews_counted, all_critics_fresh, all_critics_rotten, consensus, audience_score, user_ratings, top_critics_tomatometer, top_critics_average_rating, top_critics_reviews_counted, top_critics_fresh, top_critics_rotten) FROM '../newDataTest.csv' CSV HEADER

-- CREATE UNIQUE INDEX m ON movies (m_id);

SELECT COUNT(*) FROM movies;