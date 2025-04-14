/**
 * Author: Sara King
 * Date: April 13, 2025
 * File Name: index.js
 * Description: entry point for application
 */

"use strict";

const readline = require("readline");
const { TacoStandEmitter } = require("./taco-stand");


const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object

tacoStand.on("serve", (customer) => {
  console.log(`Customer served: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco prepared: ${taco}`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Rush handled: ${rush}`);
});

rl.on("line", (input) => {
const [command, ...args] = input.split(" ");
const argument = args.join(" ");

 // TODO: Handle the commands
  switch (command.toLowerCase()) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;
    case "prepare":
      tacoStand.prepareTaco(argument);
      break;
    case "rush":
      tacoStand.handleRush(args);
      break;
    default:
          console.log(`Unknown command: ${command}`);
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);