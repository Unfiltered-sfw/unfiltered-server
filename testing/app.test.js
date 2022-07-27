const request =  require('supertest')
const app = require("../app.js")

describe ("API", () => {
    let api;

    beforeAll(() => {
        api = app.listen(3000);
    })

    afterAll((done) => {    
        api.close(done)
    })

    it("Reponds to a GET request at '/' with a 200 status", (done) => {
        request(api).get("/").expect(200, done);
    })

    it("Responds to a Get request at '/posts' with a 200 status", (done) => {
        request(api).get("/posts").expect(200, done);
    })
    it("Responds to a GET request at '/posts' with a json object", (done) => {
        request(api).get("/posts").expect('Content-Type', /json/, done);
    })

    it("Responds to a Get request at '/comments' with a 200 status", (done) => {
        request(api).get("/comments").expect(200, done);
    })
    it("Responds to a GET request at '/comments' with a json object", (done) => {
        request(api).get("/comments").expect('Content-Type', /json/, done);
    })



})

