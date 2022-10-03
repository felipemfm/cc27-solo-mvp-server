# FireChat - Server
The frontend for this project can be find [here](https://github.com/felipemfm/fire-chat).
## About

FireChat is a chat room application designed to offer anonymous confirmation between various user. 

Project was deployed through Heroku and can be seen at [FireChat](https://cc27-chat-room.herokuapp.com/).

### Installation
Is recommended that both Server and Client folder to be placed inside the same directory folder. 

 - Create a .env file inside the root folder and add the following:
```
	NODE_ENV=development
	DB_NAME=[DB NAME]
	DB_USER=[USER NAME]
	DB_PASSWORD=[DB PASSWORD]
```
 - Install modules 
```
	npm install
```
 - Run db migration script
```
	npm run migrate:latest
```
 - If the build folder is not present, got to the client directory and run the build script
 - Run the dev script to start the server with nodemon
 ```
 	npm run dev
 ```
## Technologies
 - Node.js
 - Express
 - Knex.js
 - PorstgreSQL
