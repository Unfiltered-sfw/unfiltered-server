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
app.get("/", (req, res) => res.send("Welcome to the Unfiltered API!"));

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
