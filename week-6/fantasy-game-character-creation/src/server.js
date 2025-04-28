// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const http = require("http");
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const url = require("url");

let character = {};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;

  if (parsedUrl.pathname === "/create-character" && method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const { class: charClass, gender, funFact } = parsedUrl.query;

      if (!charClass || !gender || !funFact) {
        res.statusCode = 400;
        res.end("Missing required parameters");
        return;
      }

      character = { charClass, gender, funFact };

      res.statusCode = 201;
      res.end("Character created");
    });
  } else if (parsedUrl.pathname === "/confirm-character" && method === "POST") {
    if (!character.charClass) {
      res.statusCode = 400;
      res.end("No character created yet");
      return;
    }

    res.statusCode = 200;
    res.end("Character confirmed");
  } else if (parsedUrl.pathname === "/view-character" && method === "GET") {
    if (!character.charClass) {
      res.statusCode = 404;
      res.end("Character not found");
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(character));
  }
});

module.exports = { server };
