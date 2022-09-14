// this example takes 2 seconds to run
const start = Date.now();

console.log("starting timer...");
// expected output: starting timer...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output: seconds elapsed = 2
}, 2000);

var testvar = 1;
var num = 10;

if (num > 10) {
  console.log("The number is greater than 10.");
} else {
  console.log("The number is less than 10");
}

if (testvar === 1) {
  console.log(`[testvar]: ${testvar}`);
} else if (testvar !== testvar) {
  // NaN check
  console.log(`${testvar} is not a number.`);
}

///

// Keyless car with basic conditionals
// const thisdate = new Date();
// console.log(thisdate);
const age = Number(prompt("How old are you?"));
if (age === 0) {
  // user cancelled
  alert("User cancelled.");
  // location.reload();
} else if (age < 18) {
  console.log(age + " is not yet 18.");
  alert("Sorry, you are too young to drive this car. Powering off.");
} else if (age === 18) {
  console.log("OK " + age);
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (age > 18) {
  console.log("OK " + age);
  alert("Powering On. Enjoy the ride!");
}
// const thatdate = new Date() - thisdate;
// console.log(`Load time: ${thatdate} ms`);

// Shopping list with advanced conditionals
// const anotherdate = new Date();
const item = "coffee";
switch (item) {
  case "coffee":
    console.log("Yes. It's coffee.");
    break;
  case "bread":
    console.log("Mmm...");
    break;
  case "tea":
    console.log("Delicious.");
    break;
  default:
    console.log("Item is something else: " + item);
}
// const thelastdate = new Date() - anotherdate;
// console.log(`Switch statement runtime: ${thelastdate}`);

// Write as comments the steps of resolution for this code

let a = 2 + 2; // a = 4

switch (a) {
  case 3:
    alert("Too small"); // nope
    break;
  case 4:
    alert("Exactly!"); // yep
    break;
  case 5:
    alert("Too large"); // nope
    break;
  default:
    alert("I don't know such values"); // definitely not
}

///

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log("The number is " + i); // 0 1 2
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9
}

///

// Additional EXERCISES
// Create an array including numbers, strings, and booleans
const thearray = [1, 2, 3, "Steve", "Bob", true, false, "David"];
for (let i = 0; i < thearray.length; i++) {
  // If the item is a number < 10, console.log (# is less than 10).
  if (typeof thearray[i] === Number && thearray[i] < 10) {
    console.log(thearray[i]);
  } else if (typeof thearray[i] === String) {
    // Check if the last part is a vowel
    // If so, add an s.
    if (
      thearray[i].charAt("a") ||
      thearray[i].charAt("e") ||
      thearray[i].charAt("i") ||
      thearray[i].charAt("a") ||
      thearray[i].charAt("u")
    ) {
      console.log("Has vowel.");
    } else {
      break;
    }
  }
}
