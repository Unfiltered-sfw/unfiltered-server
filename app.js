const express = require("express");
const app = express();
const cors = require("cors");

const data = require("./db");

app.get("/", (req, res) => res.send("Welcome to the Unfiltered API!"));

module.exports = app;
