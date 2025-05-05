const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const input = {
      charClass: "Warrior",
      gender: "Male",
      funFact: "Has a dragon",
    };
    const expected = "Class: Warrior Gender: Male, Fun Fact: Has a dragon";

    characterCreator.on("data", (chunk) => {
      expect(chunk.toString()).toBe(expected);
      done();
    });

    characterCreator.write(input, () => {});
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Empty string");
      done();
    });

    // Writing an empty string should trigger the "Empty string" error
    characterCreator.write("", () => {});
  });

  test("should transform data correctly when written to", (done) => {
    const input = {
      charClass: "Mage",
      gender: "Other",
      funFact: "Brews exploding potions",
    };

    characterCreator.on("data", (chunk) => {
      const output = chunk.toString();
      expect(output).toMatch(/^Class: Mage/);
      expect(output).toMatch(/Gender: Other,/);
      expect(output).toMatch(/Fun Fact: Brews exploding potions$/);
      done();
    });

    characterCreator.write(input, () => {});
  });
});
