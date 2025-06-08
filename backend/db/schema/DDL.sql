CREATE DATABASE likeme

CREATE TABLE posts (
id serial,
titulo VARCHAR(50),
img VARCHAR(1000),
descripcion VARCHAR(255),
likes int,
)