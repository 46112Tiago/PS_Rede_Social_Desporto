begin;
/* COMPOUND */
--1)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Tenis Center','Some generic description','Some generic summary',POINT(-71.060316,48.432044),'A',true,true);
--2)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Football Center','Some generic description','Some generic summary',POINT(-71.060316,48.432044),'N',false,true);
--3)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Basketball Center','Some generic description','Some generic summary',POINT(-71.060316,48.432044),'A',true,true);
--4)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Tenis Algarve Center','Some generic description','Some generic summary',POINT(-71.060316,48.432044),'A',true,false);
--5)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Padel Center','Some generic description','Some generic summary',POINT(-71.060316,48.432044),'N',false,false);



/* FIELD */
--1)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel 1',5,true);
--2)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel 2',5,true);
--3)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('PAdel 3',5,false);
--4)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Basketball Center',3,true);
--5)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis 1',1,true);


/* USER_PROFILE */
--1)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Marco','Duarte','Lisboa','24/07/2001','mduarte@gmail.com',false,'male');
--2)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Joana','Gomes','Porto','24/08/1997','joanaG@gmail.com',true,'female');
--3)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Ricardo','Mendes','Lisboa','29/07/2002','rmmendes@gmail.com',true,'male');
--4)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Jorge','Brito','Lisboa','16/11/2000','britoJ@gmail.com',true,'male');
--5)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Maria','Duarte','Coimbra','11/07/2001','maria_duarte@gmail.com',false,'female');


/* FRIENDS */
--1)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,2);
--2)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,3);
--3)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,4);
--4)
INSERT INTO FRIENDS(userId,friendId)
VALUES (2,5);
--5)
INSERT INTO FRIENDS(userId,friendId)
VALUES (2,3);


/* PRIVATE_MESSAGE */
--1)
INSERT INTO PRIVATE_MESSAGE(senderId,receiverId,message,date)
VALUES (1,2,'Message','23/05/2019 11:24:55');
--2)
INSERT INTO PRIVATE_MESSAGE(senderId,receiverId,message,date)
VALUES (1,3,'Message','23/05/2019 11:24:55');
--3)
INSERT INTO PRIVATE_MESSAGE(senderId,receiverId,message,date)
VALUES (2,5,'Message','23/05/2019 11:24:55');
--4)
INSERT INTO PRIVATE_MESSAGE(senderId,receiverId,message,date)
VALUES (5,2,'Message','23/05/2019 11:24:55');
--5)
INSERT INTO PRIVATE_MESSAGE(senderId,receiverId,message,date)
VALUES (4,1,'Message','23/05/2019 11:24:55');


/* USER_GROUP */
--1)
INSERT INTO USER_GROUP(ownerId,name)
VALUES (1,'Friday Football');
--2)
INSERT INTO USER_GROUP(ownerId,name)
VALUES (1,'Basketball');
--3)
INSERT INTO USER_GROUP(ownerId,name)
VALUES (2,'Playing Tenis');
--4)
INSERT INTO USER_GROUP(ownerId,name)
VALUES (2,'Sunday Padel');
--5)
INSERT INTO USER_GROUP(ownerId,name)
VALUES (4,'Football');


/* GROUP_PARTICIPANT */
--1)
INSERT INTO GROUP_PARTICIPANT(participantId,groupId)
VALUES (3,2);
--2)
INSERT INTO GROUP_PARTICIPANT(participantId,groupId)
VALUES (1,3);
--3)
INSERT INTO GROUP_PARTICIPANT(participantId,groupId)
VALUES (2,1);
--4)
INSERT INTO GROUP_PARTICIPANT(participantId,groupId)
VALUES (2,2);
--5)
INSERT INTO GROUP_PARTICIPANT(participantId,groupId)
VALUES (4,3);


/* GROUP_MESSAGE */
--1)
INSERT INTO GROUP_MESSAGE(groupId,senderId,messageDate,message)
VALUES (1,2,'23/05/2019 11:24:43','Group Message');
--2)
INSERT INTO GROUP_MESSAGE(groupId,senderId,messageDate,message)
VALUES (2,3,'23/05/2019 11:24:55','Group Message');
--3)
INSERT INTO GROUP_MESSAGE(groupId,senderId,messageDate,message)
VALUES (2,2,'23/05/2019 11:24:59','Group Message');
--4)
INSERT INTO GROUP_MESSAGE(groupId,senderId,messageDate,message)
VALUES (3,4,'23/05/2019 11:24:11','Group Message');
--5)
INSERT INTO GROUP_MESSAGE(groupId,senderId,messageDate,message)
VALUES (2,2,'23/05/2019 11:24:05','Group Message');


/* SPORTS */
--1)
INSERT INTO SPORTS(name)
VALUES ('Football');
--2)
INSERT INTO SPORTS(name)
VALUES ('Basketball');
--3)
INSERT INTO SPORTS(name)
VALUES ('Tenis');
--4)
INSERT INTO SPORTS(name)
VALUES ('Padel');
--5)
INSERT INTO SPORTS(name)
VALUES ('Handball');


/* USER_SPORTS */
--1)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (1,2);
--2)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (1,3);
--3)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (2,4);
--4)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (2,5);
--5)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (3,1);


/* EVENT */
--1)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (1,5,'23/05/2019 11:00:00','25/05/2019 18:00:00','event',4,'Description','Summary',8,1,true);
--2)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (2,5,'23/05/2019 11:00:00','25/05/2019 18:00:00','event',4,'Description','Summary',8,1,true);
--3)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (5,1,'30/06/2021 10:00:00','02/07/2021 15:00:00','event',3,'Description','Summary',16,3,true);
--4)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (5,1,'30/06/2021 10:00:00','02/07/2021 15:00:00','event',3,'Description','Summary',16,3,true);
--5)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (4,3,'15/08/2020 11:24:43','16/08/2020 11:24:43','event',2,'Description','Summary',8,2,true);


/* EVENT_PARTICIPANT */
--1)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (1,2);
--2)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (1,1);
--3)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (3,2);
--4)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (4,5);
--5)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (5,1);


/* POST */
--1)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (1,'Post','22/06/2019 12:24:59',4);
--2)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post','22/06/2019 22:09:11',2);
--3)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (5,'Post','22/12/2020 14:11:50',5);
--4)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post','17/11/2019 12:24:59',11);
--5)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (4,'Post','29/06/2021 12:30:59',9);


/* POST_COMMENT */
--1)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (1,'22/06/2019 12:24:59','Comment',4);
--2)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (1,'22/07/2019 12:24:59','Comment',2);
--3)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (3,'23/12/2020 14:11:50','Comment',1);
--4)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (4,'19/11/2019 12:24:59','Comment',5);
--5)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (3,'24/12/2020 14:11:50','Comment',2);


/* REVIEW */
--1)
INSERT INTO REVIEW(fieldId,compoundId,rating,userId,description)
VALUES (1,5,4.3,1,'Review');
--2)
INSERT INTO REVIEW(fieldId,compoundId,rating,userId,description)
VALUES (2,5,3.3,1,'Review');
--3)
INSERT INTO REVIEW(fieldId,compoundId,rating,userId,description)
VALUES (1,5,4.5,3,'Review');
--4)
INSERT INTO REVIEW(fieldId,compoundId,rating,userId,description)
VALUES (5,1,2.1,3,'Review');
--5)
INSERT INTO REVIEW(fieldId,compoundId,rating,userId,description)
VALUES (4,3,4.0,4,'Review');


/* SCHEDULE */
--1)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (5,'2ª','08:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (5,'3ª','08:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (5,'4ª','08:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (5,'5ª','08:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (5,'6ª','08:00:00','20:00:00');

/* MATERIALS */
--1)
INSERT INTO MATERIALS(name)
VALUES ('tenis racket');
--2)
INSERT INTO MATERIALS(name)
VALUES ('tenis balls');
--3)
INSERT INTO MATERIALS(name)
VALUES ('padel balls');
--4)
INSERT INTO MATERIALS(name)
VALUES ('cone');
--5)
INSERT INTO MATERIALS(name)
VALUES ('padel racket');

/* MATERIAL_COMPOUND */
--1)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (1,1);
--2)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (2,1);
--3)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (3,1);
--4)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (3,5);
--5)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (5,5);


/* LOOKINGPLAYERS */
--1)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (1,1,1,'22/07/2019 12:24:59');
--2)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (1,2,1,'23/07/2019 12:24:59');
--3)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (2,5,4,'24/07/2019 12:24:59');
--4)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (3,3,3,'25/07/2019 12:24:59');
--5)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (3,5,2,'26/07/2019 12:24:59');


/* LOOKINGPLAYERS_PARTICIPANTS */
--1)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (1,2,'pending');
--2)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (1,3,'pending');
--3)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (3,1,'pending');
--4)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (4,1,'pending');
--5)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (5,2,'pending');

Select id from LOOKINGPLAYERS join LOOKINGPLAYERS_PARTICIPANTS on id = lookingId EXCEPT
Select id from LOOKINGPLAYERS join LOOKINGPLAYERS_PARTICIPANTS on id = lookingId
where creatorId = 18 OR participantId = 18

commit;















