"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require("fs").promises;
const path = require("path");

const READ_FILE = path.join(__dirname, "characters.json");
const WRITE_FILE = READ_FILE;

async function getCharacters() {
  try {
    return JSON.parse(await fs.readFile(READ_FILE, "utf8"));
  } catch (err) {
    return [];
  }
}

async function createCharacter(charClass, gender, quirk) {
  try {
    const file = await getCharacters();
    file.push({ charClass, gender, quirk });
    await fs.writeFile(WRITE_FILE, JSON.stringify(file, null, 2));
    return file;
  } catch (err) {
    throw new Error("creation error");
  }
}

module.exports = { createCharacter, getCharacters };
