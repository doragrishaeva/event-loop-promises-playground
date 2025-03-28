// Demonstrates the execution order of chained Promise.then() calls with microtasks and macrotasks

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return new Promise((resolve) => resolve("Promise 2"));
  })
  .then((result) => {
    console.log(result); // Promise 2
    setTimeout(() => {
      console.log("Timeout");
    }, 0);
  });

console.log("End");

// OUTPUT:
// Start
// End
// Promise 1
// Promise 2
// Timeout
