/**
 * Author: Sara King
 * Date: April 20, 2025
 * File Name: pie.js
 * Description: simulates a pie baker
 */

// biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
"use strict";

const essentialIngredients = ["flour", "sugar", "butter"];

function bakePie(pieType, ingredients) {
  const missingIngredients = essentialIngredients.filter(
    (item) => !ingredients.includes(item)
  );

  if (missingIngredients.length > 0) {
    console.warn(
      `Error: Missing ingredients: ${missingIngredients.join(", ")}`
    );
    process.exit(1);
  }

  return `${pieType} was baked.`;
}

module.exports = { bakePie };
