CREATE DATABASE IF NOT EXISTS se_course_db;
USE se_course_db;

CREATE TABLE IF NOT EXISTS course (
  course_id INT(11) PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100),
  description VARCHAR(200),
  duration INT(11),
  lecturer VARCHAR(100),
  category VARCHAR(10),
  promote TINYINT(1),
  course_image VARCHAR(20)
);

INSERT INTO online_course (course_id, title, description, duration, lecturer, category, promote, course_image) VALUES
(1, 'Microsoft 365', 'Using software within the Microsoft 365 suite.', 30, 'Thida Mankongprasit', 'Basic', 0, 'course1.png'),
(2, 'Google Workspace', 'Utilizing the Google Workspace software suite.', 30, 'Bowornthat Nanthaphot', 'Basic', 1, 'course2.png'),
(3, 'Infographic by Canva', 'Using the Canva program to create infographics.', 20, 'Eknat Chongchanya', 'Graphics', 1, 'course3.png'),
(4, 'Java', 'Fundamental programming with Java.', 30, 'Naphatsorn Ratsameechot', 'Coding', 0, 'course4.png'),
(5, 'Basic Data Analysis', 'Basic data analysis using Looker Studio.', 20, 'Natthapol Pathumdecha', 'Other', 1, 'course5.png');
