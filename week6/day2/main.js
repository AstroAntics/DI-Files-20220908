// PROMISES

/*
 * A promise is created using a constructor that takes a call back function with two arguments.
 * The code needed to perform the promised task is written. In this example, it is assumed that the code
 * executes successfully. If the task is successful, the promise is resolved. In this example,
 * the optional parameter “The promised task was performed successfully” is passed.
 * If the task is unsuccessful, then the promise is rejected. In this example, an optional parameter
 * is passed. The then() method is called when the promise is resolved, ​and the catch() method
 * is called if the promise is rejected or if there was an error during the code execution.
 */
let promise = new Promise((resolve, reject) => {
  // Code to perform the promised task
  let task_performed = true;
  if (task_performed) {
    resolve("The promised task was performed successfully.");
  } else {
    reject("The promised task was not performed.");
  }
});
promise
  .then((fromRes) => console.log(fromRes))
  .catch((fromRej) => console.log(fromRej));

/*
 * The Promise.all() method returns a single promise that resolves when all of the passed-in promises have resolved.
 * It rejects if one of the promises is rejected.
 */
let promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 100);
});
Promise.all([promise1, promise2]).then(() => {
  console.log("Both the promises have been resolved successfully.");
});

/*
 * The Promise.race() method returns a promise that resolves or rejects as soon as one of the promises resolves
 * or rejects. The fromRes method​ contains the value from the promise that is resolved first.
 */
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve(2), 100);
});
let promise4 = new Promise((resolve, reject) => {
  resolve(1);
});
Promise.race([promise3, promise4]).then((fromRes) => {
  console.log(`Promise return value: ${fromRes}`);
});

// EXCEPTIONS

/*
 * Exceptions are a mechanism that makes it possible for code that runs into a problem to raise (or throw) an exception.
 * An exception can be any value. Their power lies in the fact that you can set “obstacles” along the stack to
 * catch the exception. Once you’ve caught an exception, you can do something with it to address the problem and
 * then continue to run the program.
 *
 * Catching one is done by wrapping a piece of code in a try block, followed by the catch keyword.
 * When the code in the try block causes an exception to be raised, the catch block is evaluated, with the name
 * in parentheses bound to the exception value. Once the catch block finishes—or if the try block finishes without
 * problems—the program proceeds beneath the entire try/catch statement.
 */

const func = () => {
  try {
    console.log("starting the try block");
    hello;
    console.log("finishing the try block");
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log("starting the catch block");
      console.log(`
            Error Name : ${err.name},
            Error Msg : ${err.message},
            Error Stack : ${err.stack}`);
    } else {
      console.log("Another error occurred.");
    }
  } finally {
    console.log("Function done");
  }
};

func();

// Example
const divide = (a, b) => {
  try {
    if (b == 0) {
      throw new Error("Cannot divide by Zero");
    }
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`);
    } else {
      console.log("Other Error");
      console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`);
    }
  } finally {
    console.log("Function done");
  }
};

divide(3, 0);

// THROW

throw new Error("Example error.");