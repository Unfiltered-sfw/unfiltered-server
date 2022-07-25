const express = require("express");
const app = express();
const cors = require("cors");

const data = require("./db");

// Home route
app.get("/", (req, res) => res.send("Welcome to the Unfiltered API!"));

// Post route
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;

  const post = data.filter((post) => post["id"] == id);

  res.json({
    post,
  });
});

// Comment route
app.get("/posts", (req, res) => res.send(data));

module.exports = app;
