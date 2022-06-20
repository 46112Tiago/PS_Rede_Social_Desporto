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
--10)
INSERT INTO COMPOUND(name,location,parking,accepted)
VALUES ('Campo de Basquetebol Alvor',POINT(37.125772790904946, -8.596372387909131),true,true);
--11)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Vilamoura Tennis & Padel Academy','A Vilamoura Tennis e Padel Academy dispõe de 5 campos de padel descobertos, 9 campos de ténis, pro-shop e aiinda uma zona para as crianças poderem passar o tempo.',
'A Vilamoura Tennis e Padel Academy dispõe de 5 campos de padel descobertos, 9 campos de ténis.',POINT(37.08479567513542, -8.118321902325842),'A',true,true);
--12)
INSERT INTO COMPOUND(name,location,parking,accepted)
VALUES ('SkatePark Albufeira',POINT(37.10004377069428, -8.238575291802338),true,true);
--13)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Salgados Clube de ténis','Oferecemos aos nossos clientes tudo o que um coração de ténis deseja. Alugue um campo de ténis, reserve uma hora com um dos nossos treinadores ou torne-se membro e beneficie das vastas ofertas. De iniciantes a jogadores de torneios, oferecemos o programa certo para todos.',
'Somos uma empresa com dois clubes de ténis em Albufeira.',POINT(37.089404297490525, -8.322193752633607),'A',true,true);
--14)
INSERT INTO COMPOUND(name,description,summary,location,dressingRoom,parking,accepted)
VALUES ('Vale de Milho Golf','VALE DE MILHO GOLF has the ambience of a full-sized course and is maintained to high standards all year round. With its large contoured greens, tall trees, lakes and bunkers, it provides a real challenge whatever standard of golf you play.',
'VALE DE MILHO GOLF is a beautiful 9-hole course, close to the village of Carvoeiro, in the Algarve.',POINT(37.096947091201436, -8.447659078451316),'A',true,true);
--15)
INSERT INTO COMPOUND(name,location,parking,accepted)
VALUES ('R. dos Pescadores campo Basquetebol',POINT(37.1316387229116, -8.536115163511038),true,true);


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
--28)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-1',11,true);
--29)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-2',11,true);
--30)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-3',11,true);
--31)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-4',11,true);
--32)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Padel-Descoberto-5',11,true);
--33)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-1',11,true);
--34)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-2',11,true);
--35)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-3',11,true);
--36)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-4',11,true);
--37)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-5',11,true);
--38)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-6',11,true);
--39)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-7',11,true);
--40)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-8',11,true);
--41)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-Descoberto-9',11,true);
--42)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('SkatePark Albufeira',12,true);
--43)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-1',13,true);
--44)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-2',13,true);
--45)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Tenis-3',13,true);
--46)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-1',14,true);
--47)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-2',14,true);
--48)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-3',14,true);
--49)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-4',14,true);
--50)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-5',14,true);
--51)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-6',14,true);
--52)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-7',14,true);
--53)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-8',14,true);
--54)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('Hole-9',14,true);
--55)
INSERT INTO FIELD(name,compoundId,accepted)
VALUES ('R. dos Pescadores campo Basquetebol',15,true);

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
--11)
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
--11)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (3,11);
--12)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (4,11);
--13)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (9,12);
--14)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (3,13);
--15)
INSERT INTO SPORT_COMPOUND(sportId,compoundId)
VALUES (2,14);

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
'A Praia da Rocha, prepara-se para receber o campeonato Algarve Surfing Cup.',40,3,true);
--9)
INSERT INTO EVENT(compoundId,startDate,plannedfinishDate,name,sportId,description,summary,limitParticipants,creatorId,active)
VALUES (7,'15/08/2022 08:00:00','16/08/2022 17:00:00','Algarve Surfing Cup',10,'A Praia da Rocha, no concelho de Portimão, prepara-se para receber o campeonato “Algarve Surfing Cup”, com o intuito de juntar todos os clubes de surf do Algarve e fomentar a união e o convívio entre as principais entidades que desenvolvem o surf na nossa região. A prova será disputada em 3 modalidades: SURF, LONGBOARD e BODYBOARD, sendo que as categorias da modalidade SURF e BODYBOARD serão sub12, sub16, Open, Masters (+40) e Feminino. Já para a modalidade LONGBOARD, as categorias são Feminino e Open.
O evento conta com a presença de clubes de Surf do Algarve como Lagos Surf Clube (ASSL), Albufeira Surf Clube (A.S.C), Algarve Surf Clube (ASC), Associação Dinamika (AD), Clube Surf de Aljezur (CS ALJ), Clube Naval de Portimão (CNPTM), Clube de Surf de Faro (CSF), Iate Clube Marina de Portimão (ICMP), Lagos Ocean Sports Clube (LOSC), Associação de Bodyboard de Sagres e Portimão Surf Clube (PTMSC).',
'A Praia da Rocha, prepara-se para receber o campeonato Algarve Surfing Cup.',30,3,true);
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
--16)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (10,'Post 16','04/07/2021 17:30:59',9);
--17)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (7,'Post 17','04/07/2021 23:24:59',4);
--18)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post 18','05/07/2021 22:09:11',2);
--19)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (10,'Post 19','05/07/2021 23:40:50',5);
--20)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (11,'Post 20','07/07/2021 12:24:59',11);
--21)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (10,'Post 21','04/07/2021 17:30:59',9);
--22)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (7,'Post 22','04/07/2021 23:24:59',4);
--23)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (2,'Post 23','05/07/2021 22:09:11',2);
--24)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (10,'Post 24','05/07/2021 23:40:50',5);
--25)
INSERT INTO POST(userId,description,postDate,likes)
VALUES (11,'Post 25','07/07/2021 12:24:59',11);

/* POST_COMMENT */
--1)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'22/06/2022 12:24:59','Comment 1',4);
--2)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'22/07/2022 12:24:59','Comment 2',2);
--3)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'23/12/2022 14:11:50','Comment 3',1);
--4)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'19/11/2022 12:24:59','Comment 4',5);
--5)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'24/12/2022 14:11:50','Comment 5',2);
--6)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'02/07/2021 12:24:59','Comment 6',11);
--7)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'02/07/2021 12:54:59','Comment 7',10);
--8)
INSERT INTO POST_COMMENT(postId,commentDate,comment,commentCreatorId)
VALUES (2,'03/07/2021 14:11:50','Comment 8',5);
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
VALUES (7,4.8,2,'The spot is great for beginners and advanced surfer at the regular season.');
--13)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.8,2,'Fully recommend it as it is well located for parking and with fair prices.');
--14)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.5,2,'Nice customer service,  a beauty of location in Portimão.Wish there were more in town.');
--15)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,3.2,2,'Great place to get a workout and a meal after, although the restaurant could offer better prices for the quality.');
--16)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.2,2,'Great facilities for tennis, padel and dining.');
--17)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,2.9,2,'Tennis club is fantastic,pity the restaurant cannot keep up...');
--18)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (8,4.4,2,'Great location and fields.');
--19)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (9,4.3,2,'Nice establishment.');
--20)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (11,3.2,2,'Nice grounds could use new landscaping updates.');
--21)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (11,4.6,2,'Excellent tennis and padel facilities, nice bar/restaurant.');
--22)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (11,3.5,2,'Lack of anywhere to fill a water bottle requiring you to purchase bottled water.');
--23)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (12,4.8,2,'Perfect skatepark and all the space you need to fulfill your potential.');
--24)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.5,2,'Owners are lovely! Very polite and accommodating.');
--25)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.5,2,'What a fun course!');
--26)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.1,2,'Staff was super helpful getting us tourists set up with clubs and balls.');
--27)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.0,2,'Nice little 9-holes course with par 3 holes.');
--28)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.9,2,'Prices are ok.');
--29)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.2,2,'Very friendly place, welcoming tourist visitors.');
--30)
INSERT INTO REVIEW(compoundId,rating,userId,description)
VALUES (14,4.3,2,'Lovely,well maintained par 3 course.');


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
--6)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'2ª','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'3ª','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'4ª','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'5ª','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'6ª','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'Sat','09:00:00','21:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (11,'Sun','09:00:00','21:00:00');
--7)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'2ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'3ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'4ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'5ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'6ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'Sat','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (13,'Sun','09:00:00','20:00:00');
--8)
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'2ª','09:00:00','17:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'3ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'4ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'5ª','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'6ª','09:00:00','23:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'Sat','09:00:00','20:00:00');
INSERT INTO SCHEDULE(compoundId,weekday,openingHour,closingHour)
VALUES (14,'Sun','09:00:00','20:00:00');

/* MATERIALS */
--1)
INSERT INTO MATERIALS(name)
VALUES ('Tennis racket');
--2)
INSERT INTO MATERIALS(name)
VALUES ('Tennis balls');
--3)
INSERT INTO MATERIALS(name)
VALUES ('Padel balls');
--4)
INSERT INTO MATERIALS(name)
VALUES ('Cone');
--5)
INSERT INTO MATERIALS(name)
VALUES ('Padel racket');
--6)
INSERT INTO MATERIALS(name)
VALUES ('Golf tee');
--7)
INSERT INTO MATERIALS(name)
VALUES ('Golf buggy');
--8)
INSERT INTO MATERIALS(name)
VALUES ('Golf trolley');
--9)
INSERT INTO MATERIALS(name)
VALUES ('Golf clubs');
--10)
INSERT INTO MATERIALS(name)
VALUES ('Golf balls');
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
--22)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (5,11);
--23)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (4,11);
--24)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (3,11);
--25)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (2,11);
--26)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (1,11);
--27)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (2,13);
--28)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (1,13);
--25)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (6,14);
--26)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (8,14);
--27)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (9,14);
--28)
INSERT INTO MATERIAL_COMPOUND(materialId,compoundId)
VALUES (10,14);

/* LOOKINGPLAYERS */
--1)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,3,1,'22/08/2022 12:24:59');
--2)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,1,'23/08/2022 12:24:59');
--3)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,4,'24/09/2022 12:24:59');
--4)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,3,'25/09/2022 12:24:59');
--5)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,6,2,'26/08/2022 12:24:59');
--6)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,1,'22/08/2022 12:24:59');
--7)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,1,'23/08/2022 12:24:59');
--8)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,4,'24/09/2022 12:24:59');
--9)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,3,'25/09/2022 12:24:59');
--10)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,6,2,'26/08/2022 12:24:59');
--11)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,3,1,'22/08/2022 12:24:59');
--12)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,4,1,'23/08/2022 12:24:59');
--13)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,4,'24/09/2022 12:24:59');
--14)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,3,'25/09/2022 12:24:59');
--15)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,3,2,'26/08/2022 12:24:59');
--16)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,6,1,'22/08/2022 12:24:59');
--17)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,2,1,'23/08/2022 12:24:59');
--18)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,4,'24/09/2022 12:24:59');
--19)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,3,'25/09/2022 12:24:59');
--20)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,2,'26/08/2022 12:24:59');
--21)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,1,'22/08/2022 12:24:59');
--22)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,4,1,'23/08/2022 12:24:59');
--23)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,6,4,'24/09/2022 12:24:59');
--24)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,3,3,'25/09/2022 12:24:59');
--25)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,2,2,'26/08/2022 12:24:59');
--26)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,1,'22/08/2022 12:24:59');
--27)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,1,'23/08/2022 12:24:59');
--28)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,4,'24/09/2022 12:24:59');
--29)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,3,'25/09/2022 12:24:59');
--30)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,4,2,'26/08/2022 12:24:59');
--31)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,3,1,'22/08/2022 12:24:59');
--32)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,2,1,'23/08/2022 12:24:59');
--33)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,4,'24/09/2022 12:24:59');
--34)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,3,'25/09/2022 12:24:59');
--35)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,2,'26/08/2022 12:24:59');
--36)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,1,'22/08/2022 12:24:59');
--37)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,2,1,'23/08/2022 12:24:59');
--38)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,4,4,'24/09/2022 12:24:59');
--39)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,2,3,'25/09/2022 12:24:59');
--40)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,2,'26/08/2022 12:24:59');
--41)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,1,'22/08/2022 12:24:59');
--42)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,1,'23/08/2022 12:24:59');
--43)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (9,3,4,'24/09/2022 12:24:59');
--44)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,4,3,'25/09/2022 12:24:59');
--45)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,3,2,'26/08/2022 12:24:59');
--46)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (8,3,1,'22/08/2022 12:24:59');
--47)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (6,6,1,'23/08/2022 12:24:59');
--48)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (11,4,4,'24/09/2022 12:24:59');
--49)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,6,3,'25/09/2022 12:24:59');
--50)
INSERT INTO LOOKINGPLAYERS(compoundId,sportId,creatorId,startDateTime)
VALUES (14,2,2,'26/08/2022 12:24:59');

/* LOOKINGPLAYERS_PARTICIPANTS */
--1)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (41,2,'pending');
--2)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (42,3,'pending');
--3)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (43,1,'pending');
--4)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (44,1,'pending');
--5)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (45,4,'pending');
--6)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (46,2,'pending');
--7)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (47,3,'pending');
--8)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (48,1,'pending');
--9)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (49,1,'pending');
--10)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (50,3,'pending');
--1)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (31,2,'accepted');
--2)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (32,3,'accepted');
--3)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (33,1,'accepted');
--4)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (34,1,'accepted');
--5)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (35,4,'accepted');
--6)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (36,2,'accepted');
--7)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (37,3,'accepted');
--8)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (38,1,'accepted');
--9)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (39,1,'accepted');
--10)
INSERT INTO LOOKINGPLAYERS_PARTICIPANTS(lookingId,participantId,state)
VALUES (40,3,'accepted');

Select * from event_participant join event on id = eventId
Select * from private_message where receiverId = 2

commit;















