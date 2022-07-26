const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

app.use(cors());
app.use(express.json());

const data = require("./database/postsData");
const comments = require("./database/commentsData");

// TODOFIXME
// 1. Change database to json
// 2. Purge imports
// 3. Use fsPromises.readFile()
// 4. res.send(<json>)

// GET
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

// POST PROG
// Recieve posts from client
app.post("/posts", async (req, res) => {
  const data = JSON.stringify(req.body);

  if (!data) {
    return res.sendStatus(400);
  }
  try {
    // refactor line 66-79
    await fsPromises.writeFile(
      path.join(__dirname, "database", "postsDataTest.js"),
      "const data = \n"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "database", "postsDataTest.js"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "database", "postsDataTest.js"),
      "\n\n"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "database", "postsDataTest.js"),
      "module.exports = data;"
    );

    res.status(201).send("Thankyou for your posts!");
    console.log("Posts recieved!✅");
  } catch (err) {
    console.error(err);
  }
});

// Recieve comments from client
app.post("/comments", async (req, res) => {
  const comments = JSON.stringify(req.body);

  if (!comments) {
    return res.sendStatus(400);
  }

  try {
    // refactor line 100-115
    await fsPromises.writeFile(
      path.join(__dirname, "database", "commentsDataTest.js"),
      "const comments = "
    );
    await fsPromises.appendFile(
      path.join(__dirname, "database", "commentsDataTest.js"),
      comments
    );
    await fsPromises.appendFile(
      path.join(__dirname, "database", "commentsDataTest.js"),
      "\n\n"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "database", "commentsDataTest.js"),
      "module.exports = comments;"
    );

    res.status(201).send("Thankyou for your comments!");
    console.log("Comments recieved!✅");
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;
