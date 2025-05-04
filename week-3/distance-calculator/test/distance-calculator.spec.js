/**
 * Author: Sara King
 * Date: May 3, 2025
 * File Name: distance-calculator.spec.js
 * Description: calculates distance test file
 */

// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testEarthToMars() {
  try {
    const result = calculateDistance(1.0, 1.524);
    assert.strictEqual(result, 0.524);
    console.log("Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testZeroDistance() {
  try {
    const result = calculateDistance(5.0, 5.0);
    assert.strictEqual(result, 0);
    console.log("Passed testZeroDistance");
    return true;
  } catch (error) {
    console.error(`Failed testZeroDistance: ${error.message}`);
    return false;
  }
}

function testNegativeValues() {
  try {
    const result = calculateDistance(-2, 3);
    assert.strictEqual(result, 5);
    console.log("Passed testNegativeValues");
    return true;
  } catch (error) {
    console.error(`Failed testNegativeValues: ${error.message}`);
    return false;
  }
}

// Run the tests
testEarthToMars();
testZeroDistance();
testNegativeValues();
