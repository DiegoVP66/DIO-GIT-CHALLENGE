INSERT INTO tb_course (course_name, instructor_name, hours, percent) VALUES ('Computational thinking', 'Juliana Mascarenhas', 5, 100);
INSERT INTO tb_course (course_name, instructor_name, hours, percent) VALUES ('Introduction to Git and GitHub', 'Otávio Reis', 5, 100);
INSERT INTO tb_course (course_name, instructor_name, hours, percent) VALUES (' Working with Collections (JAVA)', 'Camila Cavalcante', 6, 100);


INSERT INTO tb_user (name, last_name, email,  password) VALUES ('Diego', 'Pereira',  'vp.diego28@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');


INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);