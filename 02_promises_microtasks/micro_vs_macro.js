// Demonstrates how Promise.then() (microtask) is executed before setTimeout (macrotask)

console.log("Start");

setTimeout(() => {
  console.log("setTimeout (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then (microtask)");
});

console.log("End");

// OUTPUT:
// Start
// End
// Promise.then (microtask)
// setTimeout (macrotask)
