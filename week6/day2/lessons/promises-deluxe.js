// Examples of promises (done in class)
const flip = () => {
  let x = Math.floor(Math.random() * 2) == 0;
  if (x) {
    return "heads";
  } else {
    return "tails";
  }
};

// with the executor function filled out
const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip();
  if (flipResult) {
    resolve();
  } else {
    reject();
  }
});
console.log("I'm about to flip a coin!");

// An example of a promise interacting with surrounding code
const flipAnotherCoin = () => {
  let x = Math.floor(Math.random() * 2) == 0;
  if (x) {
    return "heads";
  } else {
    return "tails";
  }
};

console.log("I'm about to flip a coin!");
const flipACoin2 = new Promise((resolve, reject) => {
  console.log("I'm flipping the coin!");
  const flipResult2 = flipAnotherCoin(); //let's say flip() takes a few seconds
  if (flipResult2) {
    console.log("Here is the coin flip result!", flipResult2);
    resolve();
  } else {
    reject();
  }
});
console.log("I have flipped the coin.");

/* Other Promise Functions
const flipACoin = new Promise((resolve, reject) => {
  resolve();
})
.then(() => {
  doSomethingElse()
  //use `.then()` to do something after `resolve()` has been called
})
.catch(() => {
  //use `.catch()` to do something after `reject()` has been called
})
.finally(() => {
  //use `.finally()` to do something either way
});
*/

// Returning values from promises
const doMagicCoinFlip = () => {
  let val = Math.floor(Math.random(2) === 0);
  if (val) {
    return "heads";
  } else {
    return "tails";
  }
};

// I love passive-aggressive variable names.
const flipAMagicCoin = new Promise((resolve, reject) => {
  const magicResult = doMagicCoinFlip();
  if (magicResult) {
    resolve(magicResult);
  } else {
    reject();
  }
}).then((magicResult) => {
  console.log(`UBER MAGIC COIN FLIP Result: ${magicResult}`);
});

const p = new Promise((resolve, reject) => {
  if (true) {
    resolve("hello world");
  } else {
    reject("error");
  }
});

p.then((result) => {
  // console.log(result);
  return result + "!";
})
  .then((result1) => {
    return result1 + "?";
  })
  .then((result2) => {
    return result2 + "#";
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((err) => {
    console.warn(err);
  });

// Using a promise later
const flipAnotherMagicCoin = new Promise((resolve, reject) => {
  const result = doMagicCoinFlip();
  if (result) {
    resolve(result);
  } else {
    reject();
  }
});

//
// now do something else
//

console.log("Forgot I had a coin to flip.");

flipAnotherMagicCoin.then((result) => {
  console.log(`Ah, ok then. ${result}`);
});

// Chaining Promises
const anotherPromise = new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    console.log("this");
  })
  .then(() => {
    console.log("that");
  })
  .then(() => {
    console.log("thisthat");
  })
  .then(() => {
    console.log("thatthis");
  });

const timedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
})
  .then(() => {
    console.log("Done!1");
  })
  .then(() => {
    setTimeout(() => {
      console.log("Done!2");
    }, 5000);
  })
  .then(() => {
    console.log("Done!3");
  });

console.log("1111111111111111111111111");
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
})
  .then(() => {
    console.log("Done!1");
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Done!2");
        resolve();
      }, 3000);
    });
  })
  .then(() => {
    console.log("Done!3");
  });
console.log("2222222222222222222222222");

// Promises can also run later.
const doThisLater = () => {
  return new Promise((resolve) => {
    // Removed reject param because we aren't rejecting the promise here
    console.log("Done!");
    resolve();
  });
};

console.log("After promise-creating function");

doThisLater();

// Static promise functions - resolve and reject
const resolved = Promise.resolve(); // instantly resolved
// const failed = Promise.reject(); // instantly rejected (failed)

const willSucceed = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 2000);
});

const willFail = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed");
  }, 2000);
});

willSucceed
  .then((result) => {
    console.log(`complete! result: ${result}`);
  })
  .finally((result) => {
    console.log(`done! result: ${result}`);
  });

willFail.catch((result) => {
  // Rejections have to be handled with a catch apparently
  console.log(`fail! result: ${result}`);
});

// Static promise management functions
// Static functions are Promise.all(), Promise.allSettled(), and Promise.race()
/*
Promise.all([promise1,promise2,.....]).then((results) => {
  //if all promises in the collection resolves,
  // `results` is an array of
  // [promise1 result, promise2 result, promise3 result]
}).catch((error) => {
  //if any promise is rejected,
  // `error` will have the rejected value of the promise that failed
  //if multiple failed,
  // `error` will be the error of the first one that failed
});

Promise.allSettled(allPromises).then((results) => {
  //waits until all promises either resolved or rejected
  //`results` will be an array of
  // [promise1 result, promise2 result, promise3 result]
});

Promise.race(allPromises).then((value) => {
  //waits until first promise in array is resolved
  //`value` will be the resolved value of the first promise resolved
}).catch((value) => {
  //waits until first promise in array is rejected
  //`value` will be the rejected value of the first promise rejected
}); 
*/
const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result1");
  }, 1000);
});

const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("result2");
  }, 2000);
});

const c = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result3");
  }, 3000);
});

Promise.all([a, b, c])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.allSettled([a, b, c]).then((results) => {
  console.log(results);
  results.map((r) => {
    console.log(
      `{ status: ${r.status}, value: ${r.value}, reason: ${r.reason} }`
    );
  });
});
//  [
//   { status: 'fulfilled', value: 'result1' },
//   { status: 'rejected', reason: 'result2' },
//   { status: 'fulfilled', value: 'result3' }
// ]

Promise.race([a, b, c])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
//result1