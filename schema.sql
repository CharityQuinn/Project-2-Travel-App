--Tell MySQL to drop the database if it exists already
DROP DATABASE IF EXISTS travel_db;
--Tell MySQL to create the database
CREATE DATABASE travel_db;

-- CREATE TABLE members
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	first_name VARCHAR(255) NOT NULL,
-- 	last_name VARCHAR(255) NOT NULL,
-- 	full_name VARCHAR(255) NOT NULL,
-- 	username VARCHAR(255) NOT NULL,
-- 	password VARCHAR(255) NOT NULL,
-- 	email VARCHAR (35) NOT NULL,
--   group_id VARCHAR (35),
-- 	has_voted BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );

-- CREATE TABLE buddies
-- (
-- 	group_id int NOT NULL AUTO_INCREMENT,
-- 	vacations VARCHAR(255) NOT NULL,
--   name VARCHAR (100),
--   PRIMARY Key (group_id)
-- );

-- CREATE TABLE member_groups
-- (
-- 	id int NOT NULL,
-- 	group_id VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE vacation_options
-- (
-- 	vaca_id int NOT NULL AUTO_INCREMENT,
-- 	name VARCHAR(255) NOT NULL,
--   PRIMARY KEY (vaca_id)
-- );

-- CREATE TABLE destination_groups
-- (
-- 	vaca_id int NOT NULL,
-- 	group_id VARCHAR(255) NOT NULL
-- );

