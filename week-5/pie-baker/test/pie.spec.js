/**
 * Author: Sara King
 * Date: April 20, 2025
 * File Name: pie.spec.js
 * Description: test file for pie.js
 */

// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
const assert = require("assert");
const { bakePie } = require("../src/pie");

// Test: pie bakes successfully with all required ingredients
function testBakePieSuccess() {
  try {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    assert.strictEqual(result, "apple was baked.");
    console.log("Passed testBakePieSuccess");
    return true;
  } catch (err) {
    console.error(`Failed testBakePieSuccess: ${err.message}`);
    return false;
  }
}

// Test: pie bakes successfully with only essential ingredients
function testBakePieEssentialOnly() {
  try {
    const result = bakePie("apple", ["flour", "sugar", "butter"]);
    assert.strictEqual(result, "apple was baked.");
    console.log("Passed testBakePieEssentialOnly");
    return true;
  } catch (err) {
    console.error(`Failed testBakePieEssentialOnly: ${err.message}`);
    return false;
  }
}

// Test: pie baking fails with missing ingredient
function testBakePieMissingIngredient() {
  const originalExit = process.exit;
  let exitCalled = false;

  // Mock process.exit to prevent exiting the test suite
  process.exit = (code) => {
    exitCalled = true;
    throw new Error(`Process exited with code ${code}`);
  };

  try {
    bakePie("apple", ["flour", "sugar"]); // Missing butter
    console.error("Failed testBakePieMissingIngredient");
    return false;
  } catch (err) {
    assert.ok(exitCalled, "Expected process.exit to be called");
    console.log("Passed testBakePieMissingIngredient");
    return true;
  } finally {
    process.exit = originalExit;
  }
}

testBakePieSuccess();
testBakePieEssentialOnly();
testBakePieMissingIngredient();
