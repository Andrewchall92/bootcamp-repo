DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  -- id INT NOT NULL,
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  --  https://www.w3schools.com/mysql/mysql_autoincrement.asp
  -- https://www.w3schools.com/mysql/mysql_primarykey.asp
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL ,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  --  PRIMARY KEY(id);
);
