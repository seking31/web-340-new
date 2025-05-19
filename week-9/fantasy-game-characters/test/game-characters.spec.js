const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, err) => {
      expect(err).toBeNull();
      expect(data).toEqual([
        {
          class: "Mage",
          gender: "Female",
          funFact: "lazy",
        },
        {
          class: "Warrior",
          gender: "Male",
          funFact: "cool",
        },
        {
          class: "Rogue",
          gender: "Female",
          funFact: "sneaky.",
        },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    gameCharacters = new GameCharacters("nope.js");
    gameCharacters.getCharacters((data, err) => {
      expect(data).toBeNull();
      expect(err).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((data, err) => {
      expect(data).toBeNull();
      expect(err).not.toBeNull();
      expect(err.message).toBe("Error");
      done();
    });
  });
});
