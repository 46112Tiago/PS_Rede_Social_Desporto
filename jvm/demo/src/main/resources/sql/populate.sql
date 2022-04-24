begin;

INSERT INTO user_profile(firstname, lastname, city, birthday, profilepic, email, available, gender)
VALUES ('Diogo','Fernandes','Lisboa',null,null,'diogotag@gmail.com',true,'Male');

INSERT INTO feed(userid) values(1);

commit;