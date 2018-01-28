// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* Easiest way to solve problem */

function reverse(str) {
  return str
    .split("") // turn str argument into an Array
    .reverse() // reverse str element
    .join(""); // join the array element into a string
}

/* Custom reverse function solution */
// function reverse(str) {
//   return str
//     .split("") // turn str argument into an Array
//     .reverseArray() // reverse str element
//     .join(""); // join the array element into a string
// }

/* Solution #3 */

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

/* Solution #4 */

// function reverse(str) {
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed, "");
// }

module.exports = reverse;

/**
 * Creating own reverse function and added to Array prototype
 * */
Array.prototype.reverseArray = function() {
  let self = this;
  let temp = [];
  for (let i = self.length - 1; i >= 0; i--) {
    temp.push(self[i]);
  }

  return temp;
};
