const comments = [
  {
    postId: 0,
    name: "anonymous",
    email: "anonymous@gmail.com",
    comments: [
      {
        id: 0,
        content: `You can do it!`,
        reaction: { heart: 3, like: 2, dislike: 0 },
      },
      {
        id: 1,
        content: `Get that summer bod ready woop woop`,
        reaction: { heart: 5, like: 0, dislike: 0 },
      },
      {
        id: 2,
        content: `I was looking to do the same`,
        reaction: { heart: 2, like: 1, dislike: 0 },
      },
    ],
  },
  {
    postId: 1,
    name: "Donald Trump",
    email: "therealdtrump@hotmail.com",
    comments: [
      {
        id: 3,
        content: `boo bland`,
        reaction: { heart: 0, like: 2, dislike: 5 },
      },
      {
        id: 4,
        content: `how interesting, not 😒`,
        reaction: { heart: 0, like: 3, dislike: 6 },
      },
      {
        id: 5,
        content: `Bet your life is fun`,
        reaction: { heart: 2, like: 5, dislike: 0 },
      },
    ],
  },
  {
    postId: 2,
    name: "John Smith",
    email: "j.smith@hotmail.com",
    comments: [
      {
        id: 6,
        content: `aw don't be discouraged`,
        reaction: { heart: 4, like: 2, dislike: 0 },
      },
      {
        id: 7,
        content: `You got this!`,
        reaction: { heart: 4, like: 3, dislike: 0 },
      },
    ],
  },
  {
    postId: 3,
    name: "Grimes",
    email: "grimes@gmail.com",
    comments: [
      {
        id: 8,
        content: `F that guy, you can do better! Onwards and upwards`,
        reaction: { heart: 7, like: 5, dislike: 0 },
      },
      {
        id: 9,
        content: `Forget about him, I'm here if you need someone to talk to 😏`,
        reaction: { heart: 2, like: 3, dislike: 6 },
      },
      {
        id: 10,
        content: `Men suck anyway sis, you got this`,
        reaction: { heart: 8, like: 5, dislike: 3 },
      },
    ],
  },
];

module.exports = comments;
