CREATE DATABASE diary;

CREATE TABLE IF NOT EXISTS entries (
    entry_id serial PRIMARY KEY,
    title VARCHAR(100),
    content VARCHAR(255) UNIQUE NOT NULL,
    date VARCHAR(50)
);