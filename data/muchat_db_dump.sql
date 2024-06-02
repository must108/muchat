create table users (
  id varchar unique primary key,
  firstname varchar,
  lastname varchar,
  username varchar unique,
  password varchar,
  email varchar unique,
  profile_pic varchar unique,
  createdAt timestamp default current_timestamp
);