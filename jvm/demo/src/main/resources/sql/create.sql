begin;


CREATE TABLE COMPOUND(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32),
    description VARCHAR(540),
    summary VARCHAR(64),
    location POINT,
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

CREATE TABLE MATERIALS(
    id SERIAL,
    compoundId INT,
    name VARCHAR(32),
    FOREIGN KEY (compoundId) REFERENCES COMPOUND(id),
    PRIMARY KEY (id)                    
);

CREATE TABLE USER_PROFILE(
    userId SERIAL,
    firstName VARCHAR(32),
    lastName VARCHAR(32),
    city VARCHAR(32),
    birthdate DATE,
    profilePic VARCHAR(100),
    email VARCHAR(32),
    available BOOLEAN,
    gender VARCHAR(32),
    PRIMARY KEY(userId)
);

CREATE TABLE FRIENDS(
    userId INT,
    friendId INT,
    PRIMARY KEY (userId,friendId),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(userId),
    FOREIGN KEY(friendId) REFERENCES USER_PROFILE(userId)
);


CREATE TABLE PRIVATE_MESSAGE(
    id SERIAL,
    senderId INT,
    receiverId INT CONSTRAINT different_then_sender CHECK (receiverId <> senderId),
    message VARCHAR(1024),
    date TIMESTAMP,
    PRIMARY KEY(id,senderId,receiverId),
    FOREIGN KEY(senderId) REFERENCES USER_PROFILE(userId),
    FOREIGN KEY(receiverId) REFERENCES USER_PROFILE(userId)
);

CREATE TABLE USER_GROUP(
    id SERIAL,
    ownerId INT,
    picture VARCHAR(100),
    name VARCHAR(32),
    PRIMARY KEY(id),
    FOREIGN KEY(ownerId) REFERENCES USER_PROFILE(userId)
);

CREATE TABLE GROUP_PARTICIPANT(
    participantId INT,
    groupId INT,
    PRIMARY KEY(participantId,groupId),
    FOREIGN KEY(participantId) REFERENCES USER_PROFILE(userId) ON DELETE CASCADE,
    FOREIGN KEY(groupId) REFERENCES USER_GROUP(id) ON DELETE CASCADE
);

CREATE TABLE GROUP_MESSAGE(
    id SERIAL,
    groupId INT,
    senderId INT,
    messageDate TIMESTAMP,
    message VARCHAR(1020),
    PRIMARY KEY(id),
    FOREIGN KEY(groupId) REFERENCES USER_GROUP(id),
    FOREIGN KEY(senderId) REFERENCES USER_PROFILE(userId)
);


CREATE TABLE SPORTS(
    id SERIAL,
    name VARCHAR(32),
    PRIMARY KEY(id)
);


CREATE TABLE USER_SPORTS(
    userId INT,
    sportId INT,
    PRIMARY KEY(sportId,userId),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(userId),
    FOREIGN KEY(sportId) REFERENCES SPORTS(id)
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
    FOREIGN KEY(creatorId) REFERENCES USER_PROFILE(userId),
    FOREIGN KEY(sportId) REFERENCES SPORTS(id)
);


CREATE TABLE EVENT_PARTICIPANT(
    participantId INT,
    eventId INT,
    PRIMARY KEY(participantId,eventId),
    FOREIGN KEY(eventId) REFERENCES EVENT(id),
    FOREIGN KEY(participantId) REFERENCES USER_PROFILE(userId)
);

CREATE TABLE POST(
    id SERIAL,
    userId INT,
    description VARCHAR(128),
    postDate TIMESTAMP,
    likes INT,
    pictures VARCHAR(100)[],
    PRIMARY KEY(id),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(userId)
);



CREATE TABLE POST_COMMENT(
    id SERIAL,
    postId INT,
    commentDate TIMESTAMP,
    comment VARCHAR(128),
    commentCreatorId INT,
    PRIMARY KEY(id,postId),
    FOREIGN KEY(postId) REFERENCES POST(id),
    FOREIGN KEY(commentCreatorId) REFERENCES USER_PROFILE(userId)
);


CREATE TABLE REVIEW(
    id SERIAL,
    fieldId INT,
    compoundId INT,
    rating FLOAT,
    userId INT,
    description VARCHAR(128),
    PRIMARY KEY(id),
    FOREIGN KEY(fieldId,compoundId) REFERENCES FIELD(id,compoundId),
    FOREIGN KEY(compoundId) REFERENCES COMPOUND(id),
    FOREIGN KEY(userId) REFERENCES USER_PROFILE(userId)
);

CREATE TABLE SCHEDULE(
    id SERIAL,
    compoundId INT,
    weekday CHAR,
    openingHour TIME,
    closingHour TIME,
    optionalDescription TEXT,
    PRIMARY KEY(id,compoundId),
    FOREIGN KEY(compoundId) REFERENCES COMPOUND(id)
);

commit;