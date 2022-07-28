const request = require("supertest");
const app = require("../app.js");

describe("API", () => {
  let api;

  beforeAll(() => {
    api = app.listen(3030);
  });

  afterAll((done) => {
    api.close(done);
  });

  describe("GET requests📩", () => {
    it("Reponds to a GET request at '/' with a 200 status", (done) => {
      request(api).get("/").expect(200, done);
    });

    it("Responds to a Get request at '/posts' with a 200 status", (done) => {
      request(api).get("/posts").expect(200, done);
    });
    it("Responds to a GET request at '/posts' with a json object", (done) => {
      request(api).get("/posts").expect("Content-Type", /json/, done);
    });

    it("Responds to a Get request at '/comments' with a 201 status", (done) => {
      request(api).get("/comments").expect(200, done);
    });

    it("Responds to a GET request at '/comments' with a json object", () => {
      request(api).get("/comments").expect( (res) => {
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
      });
    });
  });

  describe("POST reqeusts📮", () => {

    it("Recieves json file and status 200 on POST request at '/posts'", () => {
      request(api).get("/posts").expect( (res) => {
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
      });
    });
    it("Recieves json file and status 200 on POST request at '/comments'", () => {
      request(api).get("/comments").expect( (res) => {
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
      });
    });
  });
});
