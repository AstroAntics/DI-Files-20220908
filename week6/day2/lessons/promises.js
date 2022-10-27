/*
 * Promises - October 27, 2022
 *
 * A promise in Javascript is like an absolute promise.
 *
 * For example :
 * Your mother promises you that if you get good grades at the end of the semester, she will buy you a gift.
 *
 * A promise has three states.
 *
 *  Pending: the semester isn’t yet finished, so you don’t know if you will get good grades.
 *  Therefore you don’t know if you will get the gift.
 *  Fulfilled: you got good grades, and you receive the gift
 *  Rejected: you didn’t get good grades, so you don’t receive the gift
 *
 * In Javascript, a promise represents the result of an asynchronous operation.
 * It’s an object that returns a value that you hope to receive in the future.
 */

console.log("Promises file.");

// Promise syntax (left intentionally blank)
// let promise = new Promise(function (resolve, reject) {});

let goodGrades = true;

let endSemester = new Promise(function (resolve, reject) {
  if (goodGrades) {
    console.log("Gift earned! :)");
    resolve("I will get a gift");
  } else {
    console.log("Gift not earned :(");
    reject("I won't get the gift");
  }
});

/*
 * Inside the executor, you manually call the resolve() function if the executor is completed successfully, or
 * you manually call the reject() function if an error occurs. The promise object, returned by the new Promise
 * constructor, has a few properties:
 *
 * The state of the promise : "pending", "resolved" or "rejected".
 * The result of the promise. The result is initially undefined.
 * When the resolve (value) is called, the result becomes the value (the argument of the function resolve)
 * When the reject (error) is called, the result becomes the error (the argument of the function reject)
 */

let betterGrades = true;

let es2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (goodGrades) {
      console.log("Gift earned after 5 seconds.");
      resolve("I will get a gift");
    } else {
      console.log("Gift not earned after 5 seconds.");
      reject("I won't get the gift");
    }
  }, 5000);
});

console.log(es2);

/*
 * The prototype methods are applied to the instances of Promise object. They are three methods:
 *
 *   then() : used to schedule a callback to be executed when the promise is successfully resolved.
 *   Syntax: Promise.prototype.then(onFulfilled, onRejected)
 *
 *
 * onFulfilled and onRejected are callbacks called depending on the state of the Promise
 *
 *   catch(): used to schedule a callback to be executed when the promise is rejected
 *   Syntax: Promise.prototype.catch(onRejected)
 *
 *
 *   finally() : used to execute the same piece of code whether the promise is fulfilled or rejected.
 *   Syntax: Promise.prototype.finally(onFinally)
 */
let grade = 83;

let es3 = new Promise(function (resolve, reject) {
  if (grade > 90) {
    resolve("Computer");
  } else if (grade > 80 && grade <= 89) {
    resolve("Phone");
  } else {
    reject("I won't get the gift");
  }
});

// These three functions can all be replaced with arrow functions
es3.then(function (value) {
  console.log("I got an amazing gift : A ", JSON.stringify(value));
});

es3.catch(function (value) {
  console.log("Booo", value);
});

es3.finally(function () {
  console.log("No matter if I get a gift or not, I want to have good grades");
});

console.log(es3);

// Chained promises

/*
* The callback passed to the first then() method executes once the promise is resolved. In the callback, 
* we show the result of the promise and returned a new value: result * 1.17.
*
* The value returned is passed to the next .then handler. Because the first then() method returns a new Promise 
* whose value is resolved to the return value, you can call the second then() method on the returned Promise.
*
* The value returned is passed to the next .then handler. Because the second then() method returns a new Promise 
whose value is resolved to the return value, you can call the last then() method on the returned Promise. 
This last then() method returns the bankAmount after the expense. 
*/
let bankAmount = 1000;
let expense = 500;

let transaction = new Promise((resolve, reject) => {
  if (expense < bankAmount) {
    console.log("OK");
    resolve(expense);
  } else {
    reject("Rejected by the Bank");
  }
});

//1st "then"
transaction
  .then((result) => {
    //result is the argument passed in the resolve function
    console.log("The result is the expense:", result);
    console.log("Before we need to add taxes: 17% ");
    return result * 1.17;
    //2nd "then"
  })
  .then((result) => {
    //result is the expense including taxes
    console.log("The result is the expense included taxes: ", result);
    return result;
    //3rd "then"
  })
  .then((result) => {
    bankAmount -= result;
    console.log(`I have ${bankAmount} dollars left in the bank`);
    return bankAmount;
  });

/*********************************************** Final Notes ******************************************************
 * Promise API
 ** <https://javascript.info/promise-api>
 ** <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>
 *
 * Promise.all
 ** Used to execute many promises in parallel and wait until all of them are ready.
 ** Promise.all is a promise that takes an array of promises as an input (an iterable).
 ** Look at <https://javascript.info/promise-api#promise-all>
 *
 * Promise.allSettled
 ** It returns a promise that always resolves after all of the given promises have either fulfilled or rejected.
 ** It returns an array of objects that each describes the outcome of each promise.
 ** Look at <https://javascript.info/promise-api#promise-allsettled>
 ** Interesting tutorial - <https://dev.to/viclafouch/promise-allsettled-vs-promise-all-in-javascript-4mle>
 *
 * Promise.resolve(value) or Promise.reject(value)
 ** Promise.resolve(value) creates a resolved promise with the result value.
 ** <https://levelup.gitconnected.com/understanding-promise-resolve-c6eacf37da9e>
 ** Promise.reject(value) creates a rejected promise with error.
 ** <https://javascript.info/promise-api#promise-resolve-reject>
 *
 *******************************************************************************************************************/
