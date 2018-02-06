DROP DATABASE IF EXISTS clicker;
CREATE DATABASE clicker;

\c clicker;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR,
  score TEXT,
  last_played TEXT,
  upgrades TEXT
);

INSERT INTO users (username, password_digest, score, last_played, upgrades)
  VALUES ('Tyler', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'swimming', 'test', 'ball')

