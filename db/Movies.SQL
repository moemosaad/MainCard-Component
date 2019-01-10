DROP DATABASE movies IF EXISTS

CREATE DATABASE movies

CREATE TABLE audience(
consensus VARCHAR(150) NOT NULL,
audience_score DOUBLE NOT NULL,
average_rating VARCHAR(50) NOT NULL,
user_ratings DOUBLE NOT NULL,
PRIMARY KEY (audience_score),
FOREIGN KEY (id) REFERENCES score(consensus)
)

CREATE TABLE all_critics(
consensus VARCHAR(150) NOT NULL,
tomatometer DOUBLE NOT NULL,
average_rating VARCHAR(50) NOT NULL,
reviews_counted DOUBLE NOT NULL,
fresh DOUBLE NOT NULL,
rotten DOUBLE NOT NULL,
PRIMARY KEY (tomatometer),
FOREIGN KEY (id) REFERENCES score(consensus)
)

CREATE TABLE mainTableName(
id DOUBLE NOT NULL,
PRIMARY KEY (id))

CREATE TABLE score(
id DOUBLE NOT NULL,
consensus VARCHAR(150) NOT NULL,
PRIMARY KEY (consensus),
FOREIGN KEY (id) REFERENCES mainTableName(id)
)

CREATE TABLE poster(
id DOUBLE NOT NULL,
image VARCHAR(150) NOT NULL,
PRIMARY KEY (image),
FOREIGN KEY (id) REFERENCES mainTableName(id)
)

CREATE TABLE top_critics(
consensus VARCHAR(150) NOT NULL,
tomatometer DOUBLE NOT NULL,
average_rating VARCHAR(50) NOT NULL,
reviews_counted DOUBLE NOT NULL,
fresh DOUBLE NOT NULL,
rotten DOUBLE NOT NULL,
PRIMARY KEY (tomatometer),
FOREIGN KEY (id) REFERENCES score(consensus)
)

CREATE TABLE video(
id DOUBLE NOT NULL,
title VARCHAR(50) NOT NULL,
year DOUBLE NOT NULL,
video VARCHAR(50) NOT NULL,
PRIMARY KEY (title),
FOREIGN KEY (id) REFERENCES mainTableName(id)
)