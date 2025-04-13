/**
 * Author: Sara King
 * Date: April 12, 2025
 * File Name:
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return 'Program exited'
}

// TODO: the functions

module.exports = { createRecipe, setTimer, quit };