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
--6)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Clube de Golf Quinta do Peru','Quinta do Peru was the ﬁrst golf course built in the Azeitão region between the magniﬁcent castles of Sesimbra and São Filipe, in Setúbal. Located about 30 minutes from Lisbon, Quinta do Peru Golf & Country Club has 
been very well integrated into the landscape with the Serra da Arrábida, providing an incredible experience with landscapes to lose sight of. The golf course, designed by american architect Rocky Roquemore, provides an experience very enjoyable for golf lovers, presenting itself, at the same time, challenging for professional players. Quinta do Peru Golf & Country is the ideal venue for several international golf events and was considered the 57th best course in Europe. The goal of Quinta do Peru Golf & Country Club has been, from day one, sports rigor, etiquette and the development and growth of national golf.',
'It is considered one of the most prestigious golf courses on the Blue Coast.',POINT(38.541543512491515, -9.052275613906248),'M',true,true);
--7)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Portimão Surf Club','Associação sem fins lucrativos fundada em 2014 com 56 sócios fundadores, por iniciativa do multicampeão de surf Francisco Canelas e o Dr. Jorge Mimoso, com o objectivo de desenvolver a nível desportivo, social e cultural as modalidades SURF, SKATE, BODYBOARD e SUP no Algarve.',
'Desenvolver a nível desportivo, social e cultural as modalidades SURF, SKATE, BODYBOARD e SUP no Algarve.',POINT(37.115959445928326, -8.528738708317174),'A',true,true);
--8)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Clube Ténis e Padel de Portimão','Clube de ténis e padel de portimão composto por 5 campos de ténis (2 cobertos + 3 descobertos) e 8 campos de padel (5 cobertos + 3 descobertos).',
'Clube para a prática desportiva das modalidades de ténis e padel, em Portimão.',POINT(37.13473938746717, -8.54023931336881),'A',true,true);
--9)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Complexo Desportivo Alvor','Este equipamento tem como valências uma piscina coberta com seis pistas, dois campos de ténis em piso sintético, um campo polidesportivo, um equipamento de Fitness Workout, um Parque Vit’Avó (gerontomotricidade), uma parede bate-bolas e um cesto de basquetebol. No Complexo Desportivo encontra-se integrado, igualmente, um parque de merendas. Neste equipamento municipal é possível praticar diversas atividades desportivas: aquáticas (com aulas de natação dirigidas a todas as idades; hidroginástica e utilização livre da piscina), ténis (com aulas de ténis, possível reserva dos campos de ténis para prática da modalidade em regime livre com os amigos ou família e a utilização livre da parede bate-bolas), gímnicas (nos nossos equipamentos de fitness workout e gerontomotricidade, pode efetuar exercícios com diferentes níveis de dificuldade para se manter em forma).',
'A proximidade com a praia e com o mar torna o Complexo Desportivo de Alvor único.',POINT(37.12608582312724, -8.595445154787202),'A',true,true);
--9)
INSERT INTO COMPOUND(name,location,parking,accepted)
VALUES ('Campo de Basquetebol Alvor',POINT(37.125772790904946, -8.596372387909131),true,true);


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
--6)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Coberto-1',8,true);
--7)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Coberto-2',8,true);
--8)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-1',8,true);
--9)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-2',8,true);
--10)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-3',8,true);
--11)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Coberto-1',8,true);
--12)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Coberto-2',8,true);
--13)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Coberto-3',8,true);
--14)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Coberto-4',8,true);
--15)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Coberto-5',8,true);
--16)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-1',8,true);
--17)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-2',8,true);
--18)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-3',8,true);
--19)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-1',9,true);
--20)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-2',9,true);
--21)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Piscina-Pista-1',9,true);
--22)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Piscina-Pista-2',9,true);
--23)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Piscina-Pista-3',9,true);
--24)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Piscina-Pista-4',9,true);
--25)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Piscina-Pista-5',9,true);
--26)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Piscina-Pista-6',9,true);
--27)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Campo de Basquetebol Alvor',10,true);

/* USER_PROFILE */
--1)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Marco','Duarte','Lisboa','24/07/2000','projeto.seminario2022@gmail.com',false,'male');
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
--6)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Marcus','North','Braga','24/07/2001','NorthMarcus@gmail.com',false,'male');
--7)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Esha','Roberts','Aveiro','24/08/1997','ersha@gmail.com',true,'female');
--8)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Phillip','Stevens','Bragança','29/07/2002','phillipSs@gmail.com',true,'male');
--9)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Abigale','Becker','Lisboa','16/11/2000','abigaleBecker@gmail.com',true,'male');
--10)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Claude','Andrews','Lisboa','16/11/2000','cAndrews@gmail.com',true,'male');
--11)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Cristina','Veloso','Braga','24/07/2001','CrisVeloso@gmail.com',false,'male');
--12)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Gustavo','Raposo','Aveiro','24/08/1997','gusravoRaposo@gmail.com',true,'female');
--13)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Edgar','Vieira','Bragança','29/07/2002','VieiraEr@gmail.com',true,'male');
--14)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Flavia','Chaves','Lisboa','16/11/2000','chavesFlavia@gmail.com',true,'male');
--15)
INSERT INTO USER_PROFILE(firstName,lastName,city,birthdate,email,available,gender)
VALUES ('Eliana','Nunes','Lisboa','16/11/2000','Lnunes@gmail.com',true,'male');

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
--6)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,6);
--7)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,7);
--8)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,8);
--9)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,9);
--10)
INSERT INTO FRIENDS(userId,friendId)
VALUES (1,10);



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
--6)
INSERT INTO SPORTS(name)
VALUES ('Golf');
--7)
INSERT INTO SPORTS(name)
VALUES ('Surf');
--8)
INSERT INTO SPORTS(name)
VALUES ('Paddle(SUP)');
--9)
INSERT INTO SPORTS(name)
VALUES ('Skate');
--10)
INSERT INTO SPORTS(name)
VALUES ('BodyBoard');
--10)
INSERT INTO SPORTS(name)
VALUES ('Swimming');

/* SPORT_COMPOUND */
--1)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (6,6);
--2)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (7,7);
--3)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (8,7);
--4)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (9,7);
--5)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (10,7);
--6)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (3,8);
--7)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (4,8);
--9)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (3,9);
--9)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (11,9);
--10)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (2,10);

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
--6)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (2,6);
--7)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (3,6);
--8)
INSERT INTO USER_SPORTS(userId,sportId)
VALUES (5,6);

/* EVENT */
--1)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (1,5,'23/05/2023 11:00:00','25/05/2023 18:00:00','event',4,'Description','Summary',8,1,true);
--2)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (2,5,'23/05/2023 11:00:00','25/05/2023 18:00:00','event',4,'Description','Summary',8,1,true);
--3)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (5,1,'30/06/2023 10:00:00','02/07/2023 15:00:00','event',3,'Description','Summary',16,3,true);
--4)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (5,1,'30/06/2023 10:00:00','02/07/2023 15:00:00','event',3,'Description','Summary',16,3,true);
--5)
INSERT INTO EVENT(fieldId,compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (4,3,'15/08/2023 11:24:43','16/08/2023 11:24:43','event',2,'Description','Summary',8,2,true);
--6)
INSERT INTO EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (6,'10/09/2022 08:00:00','10/09/2022 19:00:00','V Ordem Mérito - Cat A',6,'5ª Competição da Ordem de Mérito para a categoria A','5ª Competição da Ordem de Mérito para a categoria A',8,2,true);
--7)
INSERT INTO EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (6,'01/10/2022 08:00:00','05/10/2022 17:00:00','Taça FPG 2022',6,'A Taça Federação Portuguesa de Golf 2022 terá início a dia um de outubro sendo previsto o encerramento para o dia 5 deste mês.','Taça Federação Portuguesa de Golf',32,2,true);
--8)
INSERT INTO EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (7,'01/08/2022 08:00:00','03/08/2022 17:00:00','Algarve Surfing Cup',7,'A Praia da Rocha, no concelho de Portimão, prepara-se para receber o campeonato “Algarve Surfing Cup”, com o intuito de juntar todos os clubes de surf do Algarve e fomentar a união e o convívio entre as principais entidades que desenvolvem o surf na nossa região. A prova será disputada em 3 modalidades: SURF, LONGBOARD e BODYBOARD, sendo que as categorias da modalidade SURF e BODYBOARD serão sub12, sub16, Open, Masters (+40) e Feminino. Já para a modalidade LONGBOARD, as categorias são Feminino e Open.
O evento conta com a presença de clubes de Surf do Algarve como Lagos Surf Clube (ASSL), Albufeira Surf Clube (A.S.C), Algarve Surf Clube (ASC), Associação Dinamika (AD), Clube Surf de Aljezur (CS ALJ), Clube Naval de Portimão (CNPTM), Clube de Surf de Faro (CSF), Iate Clube Marina de Portimão (ICMP), Lagos Ocean Sports Clube (LOSC), Associação de Bodyboard de Sagres e Portimão Surf Clube (PTMSC).',
'A Praia da Rocha, no concelho de Portimão, prepara-se para receber o campeonato “Algarve Surfing Cup”, com o intuito de juntar todos os clubes de surf do Algarve e fomentar a união e o convívio entre as principais entidades que desenvolvem o surf na nossa região.',40,3,true);
--9)
INSERT INTO EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (7,'15/08/2022 08:00:00','16/08/2022 17:00:00','Algarve Surfing Cup',10,'A Praia da Rocha, no concelho de Portimão, prepara-se para receber o campeonato “Algarve Surfing Cup”, com o intuito de juntar todos os clubes de surf do Algarve e fomentar a união e o convívio entre as principais entidades que desenvolvem o surf na nossa região. A prova será disputada em 3 modalidades: SURF, LONGBOARD e BODYBOARD, sendo que as categorias da modalidade SURF e BODYBOARD serão sub12, sub16, Open, Masters (+40) e Feminino. Já para a modalidade LONGBOARD, as categorias são Feminino e Open.
O evento conta com a presença de clubes de Surf do Algarve como Lagos Surf Clube (ASSL), Albufeira Surf Clube (A.S.C), Algarve Surf Clube (ASC), Associação Dinamika (AD), Clube Surf de Aljezur (CS ALJ), Clube Naval de Portimão (CNPTM), Clube de Surf de Faro (CSF), Iate Clube Marina de Portimão (ICMP), Lagos Ocean Sports Clube (LOSC), Associação de Bodyboard de Sagres e Portimão Surf Clube (PTMSC).',
'A Praia da Rocha, no concelho de Portimão, prepara-se para receber o campeonato “Algarve Surfing Cup”, com o intuito de juntar todos os clubes de surf do Algarve e fomentar a união e o convívio entre as principais entidades que desenvolvem o surf na nossa região.',30,3,true);
--10)
INSERT INTO EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (8,'23/09/2022 08:00:00','24/08/2022 20:00:00','Monthly Padle weekend',4,'Competição mensal de Padel de Portimão.','Competição mensal de Padel de Portimão. O evento irá decorrer das 08:00 de sábado até às 18:00 de domingo, estando previsto um jantar de encerramento com início às 21:30.',8,1,true);


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
--6)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (5,6);
--7)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (3,6);
--8)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (5,7);
--9)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (3,7);
--10)
INSERT INTO EVENT_PARTICIPANT(participantId,eventId)
VALUES (4,7);

/* POST */
--1)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (1,'Post 1','22/06/2021 12:24:59',4);
--2)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post 2','22/06/2021 22:09:11',2);
--3)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (5,'Post 3','24/06/2021 14:11:50',5);
--4)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post 4','25/06/2021 12:24:59',11);
--5)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (4,'Post 5','25/06/2021 12:30:59',9);
--6)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (7,'Post 6','30/06/2021 20:24:59',4);
--7)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (9,'Post 7','01/07/2021 22:09:11',2);
--8)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (7,'Post 8','04/07/2021 08:11:50',5);
--9)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (8,'Post 9','04/07/2021 12:24:59',11);
--10)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (10,'Post 10','04/07/2021 17:30:59',9);
--11)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (7,'Post 11','04/07/2021 23:24:59',4);
--12)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post 12','05/07/2021 22:09:11',2);
--13)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (10,'Post 13','05/07/2021 23:40:50',5);
--14)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (11,'Post 14','07/07/2021 12:24:59',11);
--15)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (9,'Post 15','07/07/2021 12:30:59',9);

/* POST_COMMENT */
--1)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (1,'22/06/2022 12:24:59','Comment 1',4);
--2)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (1,'22/07/2022 12:24:59','Comment 2',2);
--3)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (3,'23/12/2022 14:11:50','Comment 3',1);
--4)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (4,'19/11/2022 12:24:59','Comment 4',5);
--5)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (3,'24/12/2022 14:11:50','Comment 5',2);
--6)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'02/07/2021 12:24:59','Comment 6',11);
--7)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'02/07/2021 12:54:59','Comment 7',10);
--8)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'03/07/2021 14:11:50','Comment 8',5);
--9)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'06/07/2021 12:24:59','Comment 9',3);
--10)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'09/07/2021 14:11:50','Comment 10',1);
--11)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'10/07/2021 12:24:59','Comment 11',4);
--12)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'10/07/2021 22:24:59','Comment 12',2);
--13)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'14/07/2021 09:11:50','Comment 13',9);
--14)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'14/07/2021 12:24:59','Comment 14',1);
--15)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (7,'14/07/2021 14:11:50','Comment 15',8);

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
--6)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (6,4.5,4,'Always a pleasure to play here. It is a hidden gem and very close to Lisbon');
--7)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (6,4.8,2,'Good golf course in excellent condition also really good practice facilities.');
--8)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (6,4.4,5,'Lovely golf course, lovely club house, brilliant staff, cant fault the place, excellent');
--9)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (6,4.9,1,'Lovely golf course very well maintained. Friendly staff and good food.');
--10)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (6,4.0,3,'Too expensive');
--11)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (7,5.0,1,'Me and my friends took a one day surf lessons trip and it was one of the best experiences here in Portugal.');
--12)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (7,4.8,2,'The spot is great for beginners and advanced surfer (at the regular season).');
--13)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.8,2,'Fully recommend it as it is well located for parking and with fair prices.')
--14)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.5,2,'Nice customer service,  a beauty of location in Portimão.Wish there were more in town.')
--15)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,3.2,2,'Great place to get a workout and a meal after, although the restaurant could offer better prices for the quality.')
--16)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.2,2,'Great facilities for tennis, padel and dining.')
--17)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,2.9,2,'Tennis club is fantastic,pity the restaurant cannot keep up...')
--18)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.4,2,'Great location and fields.')
--19)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (9,4.3,2,'Nice establishment.')


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
--2)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'2ª','08:00:00','19:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'3ª','08:00:00','19:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'4ª','08:00:00','19:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'5ª','08:00:00','19:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'6ª','08:00:00','19:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'Sat','08:00:00','19:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (6,'Sun','08:00:00','19:00:00');
--3)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (7,'3ª','09:00:00','17:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (7,'4ª','09:00:00','17:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (7,'5ª','09:00:00','17:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (7,'6ª','09:00:00','17:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (7,'Sat','09:00:00','17:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (7,'Sun','09:00:00','17:00:00');
--4)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'2ª','09:00:00','00:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'3ª','09:00:00','00:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'4ª','09:00:00','00:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'5ª','09:00:00','00:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'6ª','09:00:00','00:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'Sat','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (8,'Sun','09:00:00','21:00:00');
--5)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (9,'2ª','08:00:00','21:30:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (9,'3ª','08:00:00','21:30:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (9,'4ª','08:00:00','21:30:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (9,'5ª','08:00:00','21:30:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (9,'6ª','08:00:00','21:30:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (9,'Sat','09:00:00','13:00:00');

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
--6)
INSERT INTO MATERIALS(name)
VALUES ('golf tee');
--7)
INSERT INTO MATERIALS(name)
VALUES ('golf buggy');
--8)
INSERT INTO MATERIALS(name)
VALUES ('golf trolley');
--9)
INSERT INTO MATERIALS(name)
VALUES ('golf clubs');
--10)
INSERT INTO MATERIALS(name)
VALUES ('golf balls');
--11)
INSERT INTO MATERIALS(name)
VALUES ('Wetsuit');
--12)
INSERT INTO MATERIALS(name)
VALUES ('Paddel Board');
--13)
INSERT INTO MATERIALS(name)
VALUES ('Surf board');
--14)
INSERT INTO MATERIALS(name)
VALUES ('Bodyboard board');
--15)
INSERT INTO MATERIALS(name)
VALUES ('Swimming board');
--16)
INSERT INTO MATERIALS(name)
VALUES ('Fins');
--17)
INSERT INTO MATERIALS(name)
VALUES ('Arm Float');

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
--6)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (6,6);
--7)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (7,6);
--8)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (8,6);
--9)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (10,6);
--10)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (11,7);
--11)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (12,7);
--12)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (13,7);
--13)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (14,7);
--14)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (1,8);
--15)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (2,8);
--16)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (3,8);
--17)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (4,8);
--18)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (5,8);
--19)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (15,9);
--20)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (16,9);
--21)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (17,9);

/* LOOKINGPLAYERS */
--1)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (1,1,1,'22/08/2022 12:24:59');
--2)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (1,2,1,'23/08/2022 12:24:59');
--3)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (2,5,4,'24/09/2022 12:24:59');
--4)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (3,3,3,'25/09/2022 12:24:59');
--5)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (3,5,2,'26/08/2022 12:24:59');


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
VALUES (2,2,'pending');

Select * from User_profile where firstName LIKE 'T%' AND lastName LIKE '%'

Select U.userId, firstName, lastName from USER_PROFILE U
JOIN FRIENDS F ON F.friendId = U.userId where F.userId = 18
Except
Select U.userId, firstName, lastName from Group_Participant GP join User_Profile U ON GP.participantId = U.userId
where GP.groupId = 8

delete from group_participant where groupId = 8 and participantId = 1
Select * from Post_comment join User_profile on commentcreatorId = userId

Select * from event join event_participant on id = eventId

select * from sport_compound

delete from friends where friendId = 3 AND userId = 18

update  user_profile set birthdate = '23/06/2000' where userId = 18

commit;















