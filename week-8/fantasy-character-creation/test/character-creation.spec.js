"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fsSync = require("fs");
const path = require("path");
const TEST_FILE = path.join(__dirname, "../src/characters.json");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    ({ createCharacter, getCharacters } = require("../src/character-creation"));
    jest.resetModules();
    if (fsSync.existsSync(TEST_FILE)) {
      fsSync.unlinkSync(TEST_FILE);
    }
  });

  test("createCharacter writes a new character to the file", async () => {
    await createCharacter("mage", "female", "dances");
    const stored = JSON.parse(fsSync.readFileSync(TEST_FILE, "utf8"));
    expect(stored).toHaveLength(1);
    expect(stored[0]).toMatchObject({
      charClass: "mage",
      gender: "female",
      quirk: "dances",
    });
  });

  // 2. Test that getCharacters reads characters from the file
  test("getCharacters reads characters from the file", async () => {
    await createCharacter("rogue", "female", "sneaky");
    const characters = await getCharacters();
    expect(characters).toHaveLength(1);
    expect(characters[0]).toHaveProperty("charClass", "rogue");
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("createCharacter handles errors when writing to the file", async () => {
    const fsPromises = require("fs").promises;
    jest
      .spyOn(fsPromises, "writeFile")
      .mockRejectedValueOnce(new Error("creation error"));

    await expect(createCharacter("warrior", "male", "kicks")).rejects.toThrow(
      "creation error"
    );
  });
});
