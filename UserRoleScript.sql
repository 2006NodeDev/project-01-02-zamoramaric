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
	"attractionLocation" text not null,
);

