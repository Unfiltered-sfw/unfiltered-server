const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

app.use(cors());
app.use(express.json());

const data = require("./postsData");
const comments = require("./commentsData");

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

// Recieve posts from client PROG
app.post("/posts", async (req, res) => {
  const data = JSON.stringify(req.body);

  if (!data) {
    return res.sendStatus(400);
  }
  try {
    await fsPromises.writeFile(path.join(__dirname, "postsData.js"), data);
    await fsPromises.appendFile(path.join(__dirname, "postsData.js"), "\n\n");
    await fsPromises.appendFile(
      path.join(__dirname, "postsData.js"),
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
    await fsPromises.writeFile(
      path.join(__dirname, "commentsData.js"),
      comments
    );
    await fsPromises.appendFile(
      path.join(__dirname, "commentsData.js"),
      "\n\n"
    );
    await fsPromises.appendFile(
      path.join(__dirname, "commentsData.js"),
      "module.exports = comments;"
    );

    res.status(201).send("Thankyou for your comments!");
    console.log("Comments recieved!✅");
  } catch (err) {
    console.error(err);
  }
});

// const state = JSON.stringify(req.body.state);

//   // guard claus
//   if (!state) {
//     return res.sendStatus(400);
//   }

//   // split into posts + comments TODO

//   try {
//     // save files
//     await fsPromises.writeFile(path.join(__dirname, "dbTest.js"), state);

//     // Read incoming json
//     // await fsPromises.readFile(path.join(__dirname, "dbTest.js"), "utf8");
//     await fsPromises.rename(path.join(__dirname, "dbTest.js"), "db1.js");
//     // await fsPromises.unlink(path.join(__dirname, "dbtest.json"));}

//     res.status(201).send("hello");
//   } catch (err) {
//     console.log(err);
//   }

module.exports = app;
