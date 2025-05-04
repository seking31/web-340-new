/**
 * Author: Sara King
 * Date: May 3, 2025
 * File Name: distance-calculator.js
 * Description: calculates distance
 */

// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";
function calculateDistance(planet1, planet2) {
  return Math.abs(planet1 - planet2);
}

module.exports = calculateDistance;
