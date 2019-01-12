DROP DATABASE spottypotatoes IF EXISTS

CREATE DATABASE spottypotatoes

CREATE TABLE movie (
    id DOUBLE NOT NULL,
    movie_id DOUBLE NOT NULL AUTOINCREMENT,
    video DOUBLE NOT NULL,
    score DOUBLE NOT NULL,
    picture DOUBLE NOT NULL,
    all_critics_tomatometer,
    all_critics_average_rating,
    all_critics_reviews_counted,
    all_critics_fresh,
    all_critics_rotten,
    consensus,
    audience_score,
    audience_average_rating,
    user_ratings,
    top_critics_tomatometer,
    top_critics_average_rating,
    top_critics_reviews_counted,
    top_critics_fresh,
    top_critics_rotten
    PRIMARY KEY (movie_id)
)


-- CREATE TABLE video (
--     id DOUBLE NOT NULL,
--     title_id VARCHAR(50) NOT NULL,
--     year_id DOUBLE NOT NULL,
--     video_id VARCHAR(50) NOT NULL,
--     FOREIGN KEY (id) REFERENCES movie(video_id)
-- )

-- CREATE TABLE poster (
--     image_id DOUBLE NOT NULL
--     image_link VARCHAR(255) NOT NULL,
--     FOREIGN KEY (id) REFERENCES movie(movie_id)
-- )

-- CREATE TABLE score (
--     score_id DOUBLE NOT NULL AUTOINCREMENT,
--     all_critics_id DOUBLE NOT NULL,
--     consensus_id DOUBLE NOT NULL,
--     audience_id DOUBLE NOT NULL,
--     top_critics_id DOUBLE NOT NULL,
--     FOREIGN KEY (score_id) REFERENCES movie(score_id)
-- )

-- CREATE TABLE all_critics (
--     all_critics_id DOUBLE NOT NULL,
--     tomatometer_id DOUBLE NOT NULL,
--     average_rating_id DOUBLE NOT NULL,
--     reviews_counted_id DOUBLE NOT NULL,
--     fresh_id DOUBLE NOT NULL,
--     rotten_id DOUBLE NOT NULL,
--     PRIMARY KEY (tomatometer),
--     FOREIGN KEY (all_critics_id) REFERENCES score(critics_id)
-- )

-- CREATE TABLE consensus (
--     consensus_id DOUBLE NOT NULL,
--     consensus VARCHAR(255) NOT NULL,
--     FOREIGN KEY (consensus_id) REFERENCES score(consensus_id)
-- )

-- CREATE TABLE audience(
--     audience_score DOUBLE NOT NULL,
--     average_rating VARCHAR(50) NOT NULL,
--     user_ratings DOUBLE NOT NULL,
--     FOREIGN KEY (id) REFERENCES score(consensus)
-- )

-- CREATE TABLE top_critics (
--     top_critics_id DOUBLE NOT NULL,
--     tomatometer_id DOUBLE NOT NULL,
--     average_rating_id DOUBLE NOT NULL,
--     reviews_counted_id DOUBLE NOT NULL,
--     fresh_id DOUBLE NOT NULL,
--     rotten_id DOUBLE NOT NULL,
--     PRIMARY KEY (tomatometer),
--     FOREIGN KEY (top_critics_id) REFERENCES score(top_critics_id)
-- )



-- CREATE TABLE movie (
--     id DOUBLE NOT NULL,
--     movie_id DOUBLE NOT NULL AUTOINCREMENT,
--     video_id DOUBLE NOT NULL,
--     poster_id DOUBLE NOT NULL,
--     score_id DOUBLE NOT NULL,
--     PRIMARY KEY (id)
-- )

-- CREATE TABLE video (
--     id DOUBLE NOT NULL,
--     title_id VARCHAR(50) NOT NULL,
--     year_id DOUBLE NOT NULL,
--     video_id VARCHAR(50) NOT NULL,
--     FOREIGN KEY (id) REFERENCES movie(video_id)
-- )

-- CREATE TABLE title (
--     title_id DOUBLE NOT NULL,
--     FOREIGN KEY (title_id) REFERENCES video(title_id)
-- )

-- CREATE TABLE year (
--     year_id DOUBLE NOT NULL,
--     FOREIGN KEY (year_id) REFERENCES video(year_id)
-- )

-- CREATE TABLE video_list (
--     video_id DOUBLE NOT NULL,
--     video_link VARCHAR(255) NOT NULL,
--     FOREIGN KEY (video_id) REFERENCES video(video_id)
-- )

-- CREATE TABLE poster (
--     image_id DOUBLE NOT NULL
--     image_link VARCHAR(255) NOT NULL,
--     FOREIGN KEY (id) REFERENCES movie(movie_id)
-- )

-- CREATE TABLE image_list (
--     image_id VARCHAR(150) NOT NULL,
--     FOREIGN KEY (image_id) REFERENCES poster(image_id)
-- )

-- CREATE TABLE score (
--     score_id DOUBLE NOT NULL AUTOINCREMENT,
--     all_critics_id DOUBLE NOT NULL,
--     consensus_id DOUBLE NOT NULL,
--     audience_id DOUBLE NOT NULL,
--     top_critics_id DOUBLE NOT NULL,
--     FOREIGN KEY (score_id) REFERENCES movie(score_id)
-- )

-- CREATE TABLE all_critics (
--     all_critics_id DOUBLE NOT NULL,
--     tomatometer_id DOUBLE NOT NULL,
--     average_rating_id DOUBLE NOT NULL,
--     reviews_counted_id DOUBLE NOT NULL,
--     fresh_id DOUBLE NOT NULL,
--     rotten_id DOUBLE NOT NULL,
--     PRIMARY KEY (tomatometer),
--     FOREIGN KEY (all_critics_id) REFERENCES score(critics_id)
-- )

-- CREATE TABLE consensus (
--     consensus_id DOUBLE NOT NULL,
--     consensus VARCHAR(255) NOT NULL,
--     FOREIGN KEY (consensus_id) REFERENCES score(consensus_id)
-- )

-- CREATE TABLE audience(
--     audience_score DOUBLE NOT NULL,
--     average_rating VARCHAR(50) NOT NULL,
--     user_ratings DOUBLE NOT NULL,
--     FOREIGN KEY (id) REFERENCES score(consensus)
-- )

-- CREATE TABLE top_critics (
--     top_critics_id DOUBLE NOT NULL,
--     tomatometer_id DOUBLE NOT NULL,
--     average_rating_id DOUBLE NOT NULL,
--     reviews_counted_id DOUBLE NOT NULL,
--     fresh_id DOUBLE NOT NULL,
--     rotten_id DOUBLE NOT NULL,
--     PRIMARY KEY (tomatometer),
--     FOREIGN KEY (top_critics_id) REFERENCES score(top_critics_id)
-- )

-- CREATE TABLE tomatometer (
--     tomatometer_id DOUBLE NOT NULL,
--     FOREIGN KEY (tomatometer_id) REFERENCES critics(tomatometer_id)
-- )

-- CREATE TABLE average_rating (
--     average_rating_id DOUBLE NOT NULL,
--     FOREIGN KEY (average_rating_id) REFERENCES critics(average_rating_id)
--     FOREIGN KEY (average_rating_id) REFERENCES 
-- )

-- CREATE TABLE reviews_counted (
--     reviews_counted_id DOUBLE NOT NULL,
--     FOREIGN KEY (reviews_counted_id) REFERENCES critics(reviews_counted_id)
-- )

-- CREATE TABLE fresh (
--     fresh_id DOUBLE NOT NULL,
--     FOREIGN KEY (fresh_id) REFERENCES critics(fresh_id)
-- )

-- CREATE TABLE rotten (
--     rotten_id DOUBLE NOT NULL,
--     FOREIGN KEY (rotten_id) REFERENCES critics(rotten_id)
-- )

COPY movie FROM './newData.csv' with FORMAT csv;