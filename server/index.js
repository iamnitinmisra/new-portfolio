require('dotenv').config();
const express = require('express')
// const massive = require('massive')

const app = express();
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

const {SERVER_PORT, CONNECTION_STRING} = process.env


// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }).then(db => {
//     app.set("db", db)
//     console.log("Database connectione established")
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))
    
// })
// .catch(error =s> console.log(error, 'An error occurred while trying to connect to the server. Please scroll up to view the error'))