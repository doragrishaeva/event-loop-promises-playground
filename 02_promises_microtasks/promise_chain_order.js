// Demonstrates the execution order of chained Promise.then() calls (all in microtask queue)

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("Promise.then 1");
    return "value";
  })
  .then((val) => {
    console.log("Promise.then 2");
    return val;
  })
  .then((val) => {
    console.log("Promise.then 3");
  });

console.log("End");

// OUTPUT:
// Start
// End
// Promise.then 1
// Promise.then 2
// Promise.then 3
