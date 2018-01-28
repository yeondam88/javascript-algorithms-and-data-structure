// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
    .split("") // turn str argument into an Array
    .reverse() // reverse str element
    .join(""); // join the array element into a string
}

module.exports = reverse;
