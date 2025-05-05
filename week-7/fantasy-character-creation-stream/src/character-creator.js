const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options = {}) {
    super({
      ...options,
      writableObjectMode: true,
      readableObjectMode: false,
    });
  }

  _write(chunk, encoding, callback) {
    const { charClass, gender, funFact } = chunk;

    if (typeof chunk === "string" && chunk === "") {
      callback(new Error("Empty string"));
      return;
    }

    const description = `Class: ${charClass} Gender: ${gender}, Fun Fact: ${funFact}`;
    this.push(description);
    callback();
  }

  _read() {}
}

module.exports = CharacterCreator;
