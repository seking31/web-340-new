/**
 * Author: Sara King
 * Date: April 13, 2025
 * File Name: taco-stand.spec.js
 * Description: test file for taco-stand
 */

"use strict";

const assert = require("assert");
const { TacoStandEmitter } = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "Alice");
    });

    tacoStand.serveCustomer("Alice");
    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err.message}`);
    return false;
  }
}

// Test for prepareTaco method
function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "carnitas");
    });

    tacoStand.prepareTaco("carnitas");
    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err.message}`);
    return false;
  }
}

// Test for handleRush method
function testHandleRush() {
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunchtime");
    });

    tacoStand.handleRush("lunchtime");
    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err.message}`);
    return false;
  }
}

testServeCustomer()
testPrepareTaco()
testHandleRush()