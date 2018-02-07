DROP DATABASE IF EXISTS clicker;
CREATE DATABASE clicker;

\c clicker;

DROP TABLE users;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR,
  score INTEGER,
  last_played TEXT,
  upgrades TEXT
);

INSERT INTO users (username, password_digest, score, last_played, upgrades)
  VALUES ('Newton', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 1, '12/12/12', 'ball, tennis'),
         ('ELON', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 2, '12/12/12', 'ball, tennis'),
         ('GERSON', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 3, '12/12/12', 'ball, tennis'),
         ('OUMED', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 4, '12/12/12', 'ball, tennis')

