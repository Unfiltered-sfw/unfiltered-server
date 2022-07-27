const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

app.use(cors());
app.use(express.json());

// GET
// Home route
app.get("/", (req, res) => 
res.send("Welcome to the Unfiltered API!")
);

// Posts route ✅
app.get("/posts", async (req, res) => {
  const posts = await fsPromises.readFile(
    path.join(__dirname, "database", "postsData.json"),
    "utf8"
  );
  res.send(posts);
});

// Comments route ✅
app.get("/comments", async (req, res) => {
  const comments = await fsPromises.readFile(
    path.join(__dirname, "database", "commentsData.json"),
    "utf8"
  );
  res.send(comments);
});

// POST
// Recieve posts from client✅
app.post("/posts", async (req, res) => {
  const data = JSON.stringify(req.body);

  if (!data) {
    return res.sendStatus(400);
  }
  try {
    await fsPromises.writeFile(
      path.join(__dirname, "database", "postsData.json"),
      data
    );

    res.status(201).send("Thankyou for your posts!");

    console.log("Posts recieved!✅");
  } catch (err) {
    console.error(err);
  }
});

// Recieve comments from client ✅
app.post("/comments", async (req, res) => {
  const comments = JSON.stringify(req.body);

  if (!comments) {
    return res.sendStatus(400);
  }

  try {
    await fsPromises.writeFile(
      path.join(__dirname, "database", "commentsData.js"),
      comments
    );

    res.status(201).send("Thankyou for your comments!");
    console.log("Comments recieved!✅");
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;
