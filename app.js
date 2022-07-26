const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { data, comments } = require("./db");

// Home route
app.get("/", (req, res) => res.send("Welcome to the Unfiltered API!"));

// Posts route
app.get("/posts", (req, res) => {
  res.json({ data });
});

// Individual Post
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

// Individual post
app.get("/comments/:id", (req, res) => {
  const id = req.params.id;

  const comment = data.filter((comments) => comments["id"] == id);

  res.json({
    comment,
  });
});

// Recieve data from client PROG
app.post("/", (req, res) => {
  const state = req.body.state;

  // guard claus
  if (!state) {
    return res.sendStatus(400);
  }

  // split into posts + comments TODO

  // save files

  res.status(201).send("hello");
});

module.exports = app;
