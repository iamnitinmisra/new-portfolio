require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/../build`));
// const massive = require('massive')
app.use(express.json());
const projectCtrl = require("./ctrl/projectsCtrl");

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const { allProjects } = projectCtrl;

app.get("/api/projects", allProjects);
// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }).then(db => {
//     app.set("db", db)
//     console.log("Database connectione established")
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port ${SERVER_PORT}`)
);

// })
// .catch(error =s> console.log(error, 'An error occurred while trying to connect to the server. Please scroll up to view the error'))
