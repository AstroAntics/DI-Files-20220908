/*
 * Exercise 1 : Comparison
 * Create a function called compareToTen(num) that takes a number as an argument. The function should return a Promise.
 * The promise resolves if the argument is less than 10, and rejects if argument is greater than 10.
 */
/* const compareToTen = (num) => {
  if (num < 10) {
    Promise.resolve("less than 10.");
  } else if (num >= 10) {
    Promise.reject("greater than or equal to 10.");
  } else {
    Promise.reject("invalid input.");
  }
};

console.log("----- Running number comparison -----");
compareToTen(10)
  .then((result) => console.log(result))
  .catch((error) => console.warn(error)); */

// A few tricks with promises
console.log("Fetching GIPHY data.");
fetch(
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.warn(err));

console.log("Fetching GIPHY data about 'the sun' with starting position 2");
fetch(
  "https://api.giphy.com/v1/gifs/search?q=the%20sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2"
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.warn(err));
