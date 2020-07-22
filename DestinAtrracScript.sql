create schema project1;
set schema 'project1';

create table roles(
	"role_id" serial primary key,
	"role" text
);

create table users (
	"user_id" serial primary key,
	"username" text not null unique,
	"password" text not null,
	"firstName" text not null,
	"lastName" text not null,
	"email" text,
	"role" int references roles ("role_id") --fk to a role table
);

INSERT INTO roles (role)
VALUES ('SiteMember');

select * from roles
select * from users
select * from destinAttrac


INSERT INTO roles (username, password, firstName, lastName,email,role)
VALUES ('zamoramaric', 'password@1', 'Maricruz','Zamora', 'zamorama@umiche=.edu', 'admin');

INSERT INTO users ("username", "password", "firstName", "lastName", "email", "role")
VALUES ('testingUser', 'passw1', 'Testing','User', 'email@gmail.com', );
INSERT INTO users ("username", "password", "firstName", "lastName", "email", "role")
VALUES ('zamoramaric', 'password@1', 'Maricruz','Zamora', 'zamorama@umiche=.edu',1);

create table destinAttrac(
	"stateName"  text not null,
	"capital" text not null,
	"region" text not null,
	"topAttraction" text not null,
	"attractionLocation" text not null
);

ALTER TABLE destinAttrac
RENAME COLUMN "stateName" TO "USLocation";

ALTER TABLE destinAttrac
DROP "attractionLocation";

ALTER TABLE destinAttrac
RENAME COLUMN "topAttraction" TO "attraction";

INSERT INTO destinAttrac ("USLocation", "capital", "region", "attraction")
VALUES('Oklahoma','Oklahoma City','South','The Cave House'),
('Oregon','Salem','West','Columbia River Gorge National Scenic Area'),
('Pennsylvania','Harrisburg','Northeast','Hersheypark'),
('Rhode Island','Providence','Northeast','Newports Ocean Drive'),
('South Carolina',	'Columbia',	'South','Hilton Head Island Bike Trails'),
('South Dakota','Pierre','Midwest',	'Crazy Horse Memorial and Mount Rushmore'),
('Tennessee', 'Nashville','South','Dollywood'),
('Texas','Austin','South','The DoSeum'),
('Utah','Salt Lake City','WesT','National Dinosaur Monument'),
('Vermont','Montpelier','Northeast','Ben & Jerrys Factory Tour and Ice Cream Shop'),
('Virginia','Richmond','South','Colonial Williamsburg'),
('Washington','Olympia','West','Cape Flattery'),
('West Virginia','Charleston','South','Harpers Ferry National Historic Park'),
('Wisconsin','Madison','Midwest','U.S. Mailboat Tour on Geneva Lake'),
('Wyoming','Cheyenne','West','National Elk Refuge');

ALTER TABLE users
RENAME COLUMN "firstName" TO "first_name";
ALTER TABLE users
RENAME COLUMN "lastName" TO "last_name";

ALTER TABLE users
RENAME COLUMN "first_name" TO "firstName";