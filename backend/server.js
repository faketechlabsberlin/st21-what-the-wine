const express = require("express");
//const connectDB = require("./config/db");
//const bodyParser = require("body-parser");

const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const users = require("./api/users.route");
// const port = process.env.PORT || 8080;
const app = express();

//middleware
//app.use(express.urlencoded({ extendednpm: true }));
//app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

//*calling routes
app.use("/api/users", users);
//* routes that are not in api file error
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

//*export app as a module
//* this is to seperate the server code from the db code
module.exports = app;

// Calling the Database
//port = process.env.PORT;
//connectDB();
