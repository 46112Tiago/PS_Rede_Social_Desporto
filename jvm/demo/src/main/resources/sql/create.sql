begin;


CREATE TABLE COMPOUND(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32),
    description VARCHAR(540),
    summary VARCHAR(64),
    location FLOAT[2],
    material VARCHAR(32)[16],
    dressingRoom CHAR,
    parking BOOLEAN,
    pictures VARCHAR(100)[],
    accepted BOOLEAN
);

CREATE TABLE FIELD(
    id SERIAL,
    compoundId INT,
    name VARCHAR(32),
    pictures VARCHAR(100)[],
    accepted BOOLEAN,
    PRIMARY KEY(id,compoundId),
    FOREIGN KEY(compoundId) REFERENCES COMPOUND(id)   
);

CREATE TABLE USER_PROFILE(
    id SERIAL,
    firstName VARCHAR(32),
    lastName VARCHAR(32),
    city VARCHAR(32),
    birthday TIMESTAMP,
    profilePic VARCHAR(100),
    email VARCHAR(32),
    available BOOLEAN,
    gender VARCHAR(32),
    PRIMARY KEY(id)
);

CREATE TABLE FRIENDS(
    id SERIAL,
    userId INT,
    PRIMARY KEY (id),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(id)
);


CREATE TABLE PRIVATE_MESSAGE(
    id SERIAL,
    senderId INT,
    receiverId INT,
    message VARCHAR(1024),
    PRIMARY KEY(id,senderId,receiverId),
    FOREIGN KEY(senderId) REFERENCES USER_PROFILE(id),
    FOREIGN KEY(receiverId) REFERENCES USER_PROFILE(id)
);

CREATE TABLE USER_GROUP(
    id SERIAL,
    ownerId INT,
    picture VARCHAR(100),
    name VARCHAR(32),
    PRIMARY KEY(id),
    FOREIGN KEY(ownerId) REFERENCES USER_PROFILE(id)
);

CREATE TABLE GROUP_PARTICIPANT(
    participantId SERIAL,
    groupId INT,
    PRIMARY KEY(participantId,groupId),
    FOREIGN KEY(participantId) REFERENCES USER_PROFILE(id),
    FOREIGN KEY(groupId) REFERENCES USER_GROUP(id)
);

CREATE TABLE GROUP_MESSAGE(
    id SERIAL,
    groupId INT,
    senderId INT,
    messageDate TIMESTAMP,
    message VARCHAR(1020),
    PRIMARY KEY(id),
    FOREIGN KEY(groupId) REFERENCES USER_GROUP(id),
    FOREIGN KEY(senderId) REFERENCES USER_PROFILE(id)
);


CREATE TABLE SPORTS(
    id SERIAL,
    name VARCHAR(32),
    PRIMARY KEY(id)
);


CREATE TABLE USER_SPORTS(
    id SERIAL,
    userId INT,
    name VARCHAR(32),
    PRIMARY KEY(id,userId),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(id)
);


CREATE TABLE EVENT(
    id serial PRIMARY KEY,
    fieldId INT,
    compoundId INT,
    startDate TIMESTAMP,
	plannedfinishDate TIMESTAMP,
    name VARCHAR(32),
    sportId INT,
    description VARCHAR(64),
	limitParticipants INT,
	creatorId INT,
	active BOOLEAN,
    FOREIGN KEY(fieldId,compoundId) REFERENCES FIELD(id,compoundId),
    FOREIGN KEY(creatorId) REFERENCES USER_PROFILE(id),
    FOREIGN KEY(creatorId,sportId) REFERENCES SPORTS(userId,id)
);


CREATE TABLE EVENT_PARTICIPANT(
    id SERIAL,
    participantId INT,
    eventId INT,
    PRIMARY KEY(id),
    FOREIGN KEY(eventId) REFERENCES EVENT(id),
    FOREIGN KEY(participantId) REFERENCES USER_PROFILE(id)
);

CREATE TABLE POST(
    id SERIAL,
    userId INT,
    description VARCHAR(128),
    postDate TIMESTAMP,
    likes INT,
    pictures VARCHAR(100)[],
    PRIMARY KEY(id),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(id)
);



CREATE TABLE POST_COMMENT(
    id SERIAL,
    postId INT,
    commentDate TIMESTAMP,
    comment VARCHAR(128),
    commentCreatorId INT,
    PRIMARY KEY(id,postId),
    FOREIGN KEY(postId) REFERENCES POST(id),
    FOREIGN KEY(commentCreatorId) REFERENCES USER_PROFILE(id)
);

begin;
CREATE TABLE REVIEW(
    id INT,
    fieldId INT,
    compoundId INT,
    rating FLOAT,
    userId INT,
    description VARCHAR(128),
    PRIMARY KEY(id),
    FOREIGN KEY(fieldId,compoundId) REFERENCES FIELD(id,compoundId),
    FOREIGN KEY(compoundId) REFERENCES COMPOUND(id),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(id)
);
commit;
CREATE TABLE SCHEDULE(
    id SERIAL,
    compoundId INT,
    weekday CHAR,
    openingHour TIME,
    closingHour TIME,
    PRIMARY KEY(id,compoundId),
    FOREIGN KEY(compoundId) REFERENCES COMPOUND(id)
);
begin;

CREATE TABLE FEED(
    id SERIAL,
    userid Int,
    PRIMARY KEY(id),
    FOREIGN KEY(userid) REFERENCES USER_PROFILE(id)
);
begin;
CREATE TABLE FEED_POST(
    id SERIAL,
    postid Int,
    feedid Int,
    PRIMARY KEY (id,postid),
    FOREIGN KEY(postid) REFERENCES  POST(id),
    FOREIGN KEY(feedid) REFERENCES  FEED(feed_id)
);

commit;