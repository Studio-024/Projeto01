CREATE TABLE users (
	cod INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(60) BINARY NOT NULL,
	PRIMARY KEY ( cod )
);
