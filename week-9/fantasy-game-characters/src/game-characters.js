// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";

const { spawn } = require("child_process");
const { join } = require("path");

class GameCharacters {
  constructor(scriptFileName = "game-characters-data.js") {
    this.scriptPath = join(__dirname, scriptFileName);
  }

  getCharacters(callback) {
    const child = spawn("node", [this.scriptPath]);

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (err) => {
      callback(null, err);
    });

    child.on("close", (code) => {
      if (code !== 0) {
        const msg = stderr.trim() || `Process exited with code ${code}`;
        return callback(null, new Error(msg));
      }
      try {
        const parsed = JSON.parse(stdout);
        callback(parsed, null);
      } catch (parseErr) {
        callback(null, parseErr);
      }
    });
  }
}

module.exports = { GameCharacters };
