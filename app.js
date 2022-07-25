const express = require("express");
const app = express();
const cors = require("cors");

const { data, comments } = require("./db");

// Home route
app.get("/", (req, res) => res.send("Welcome to the Unfiltered API!"));

// Posts route
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;

  const post = data.filter((post) => post["id"] == id);

  res.json({
    post,
  });
});

// Comments route
app.get("/comments", (req, res) => {
  res.json({ comments });
});

module.exports = app;
