CREATE DATABASE campfire;

CREATE TABLE stories(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content text
);

ALTER TABLE stories
ADD COLUMN burn integer;

ALTER TABLE stories
ALTER COLUMN burn
SET DEFAULT 0;