begin;

INSERT INTO user_profile(firstname, lastname, city, birthdate, profilepic, email, available, gender)
VALUES ('Diogo','Fernandes','Lisboa',null,null,'diogotag@gmail.com',true,'Male');

INSERT INTO SPORTS(name) values ('football');

select * from field;

commit;

SELECT id,ownerid,picture,name FROM user_group INNER JOIN group_participant as gp ON user_group.id = gp.groupid AND gp.participantid = 1

SELECT post.id as p_id FROM POST INNER JOIN user_profile on post.userid = user_profile.userid AND post.id = 1

CREATE EXTENSION postgis;