// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const http = require("http");
const { server } = require("../src/server");

describe("Server Tests", () => {
  const character = {
    charClass: "Warrior",
    gender: "Female",
    funFact: "Love Testing",
  };

  beforeAll((done) => {
    server.listen(3000, () => {
      done();
    });
  });

  afterAll(() => {
    server.close();
  });

  test("POST /create-character should create a character and return 201", (done) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/create-character?class=Warrior&gender=Female&funFact=Love%20Testing",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          expect(res.statusCode).toBe(201);
          expect(data).toBe("Character created");
          done();
        });
      }
    );
    req.on("error", (e) => done(e));
    req.end();
  });

  test("POST /confirm-character should confirm character creation and return 200", (done) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/confirm-character",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          expect(res.statusCode).toBe(200);
          expect(data).toBe("Character confirmed");
          done();
        });
      }
    );
    req.on("error", (e) => done(e));
    req.end();
  });

  test("GET /view-character should return the created character data", (done) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/view-character",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          expect(res.statusCode).toBe(200);
          expect(JSON.parse(data)).toEqual(character);
          done();
        });
      }
    );
    req.on("error", (e) => done(e));
    req.end();
  });
});
