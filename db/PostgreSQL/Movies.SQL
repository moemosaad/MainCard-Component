DROP DATABASE spottypotatoes IF EXISTS

CREATE DATABASE spottypotatoes

CREATE TABLE movie (
    id DOUBLE NOT NULL,
    movie_id DOUBLE NOT NULL AUTOINCREMENT,
    video_id DOUBLE NOT NULL
    poster_id DOUBLE NOT NULL
    audience_id DOUBLE NOT NULL
    score_id DOUBLE NOT NULL
    PRIMARY KEY (id)
)

CREATE TABLE video (
    id DOUBLE NOT NULL,
    title_id VARCHAR(50) NOT NULL,
    year_id DOUBLE NOT NULL,
    video_id VARCHAR(50) NOT NULL,
    -- PRIMARY KEY (title),
    FOREIGN KEY (id) REFERENCES movie(video_id)
)

CREATE TABLE title (
    title_id DOUBLE NOT NULL,
    FOREIGN KEY (title_id) REFERENCES video(title_id)
)

CREATE TABLE year (
    year_id DOUBLE NOT NULL,
    FOREIGN KEY (year_id) REFERENCES video(year_id)
)

CREATE TABLE video_list (
    video_id DOUBLE NOT NULL,
    FOREIGN KEY (video_id) REFERENCES video(video_id)
)

CREATE TABLE poster (
    id DOUBLE NOT NULL,
    image_id VARCHAR(150) NOT NULL
    -- PRIMARY KEY (image),
    FOREIGN KEY (id) REFERENCES movie(movie_id)
)

CREATE TABLE image_list (
    image_id VARCHAR(150) NOT NULL,
    FOREIGN KEY (image_id) REFERENCES poster(image_id)
)

CREATE TABLE audience(
    audience_score DOUBLE NOT NULL,
    average_rating VARCHAR(50) NOT NULL,
    user_ratings DOUBLE NOT NULL,
    -- PRIMARY KEY (audience_score),
    FOREIGN KEY (id) REFERENCES score(consensus)
)

CREATE TABLE score (
    id DOUBLE NOT NULL,
    consensus_id ,
    -- PRIMARY KEY (consensus),
    FOREIGN KEY (id) REFERENCES movie(movie_id)
)

CREATE TABLE consensus (
    consensus_id DOUBLE NOT NULL,
    consensus VARCHAR(150) NOT NULL,
    FOREIGN KEY (consensus_id) REFERENCES score(consensus_id)
)

CREATE TABLE critics (
    tomatometer_id DOUBLE NOT NULL,
    average_rating_id VARCHAR(50) NOT NULL,
    reviews_counted_id DOUBLE NOT NULL,
    fresh DOUBLE_id NOT NULL,
    rotten DOUBLE NOT NULL,
    critic_type TINYINT NOT NULL, 
    PRIMARY KEY (tomatometer),
    FOREIGN KEY (id) REFERENCES score(consensus)
)

CREATE TABLE tomatometer (
    tomatometer_id DOUBLE NOT NULL,
    FOREIGN KEY (tomatometer_id) REFERENCES critics(tomatometer_id)
)

CREATE TABLE average_rating (
    average_rating_id VARCHAR(50) NOT NULL,
    FOREIGN KEY (average_rating_id) REFERENCES critics(average_rating_id)
)

CREATE TABLE reviews_counted (
    reviews_counted_id DOUBLE NOT NULL,
    FOREIGN KEY (reviews_counted_id) REFERENCES critics(reviews_counted_id)
)

CREATE TABLE fresh (
    fresh_id DOUBLE NOT NULL,
    FOREIGN KEY (fresh_id) REFERENCES critics(fresh_id)
)

CREATE TABLE rotten (
    rotten_id DOUBLE NOT NULL,
    FOREIGN KEY (rotten_id) REFERENCES critics(rotten_id)
)

COPY movie FROM './newData.csv' with FORMAT csv;