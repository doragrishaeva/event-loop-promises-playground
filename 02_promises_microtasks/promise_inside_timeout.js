// Demonstrates how a Promise inside setTimeout creates a microtask after a macrotask

console.log("Start");

setTimeout(() => {
  console.log("setTimeout (macrotask)");

  Promise.resolve().then(() => {
    console.log("Promise.then inside setTimeout (microtask)");
  });
}, 0);

console.log("End");

// OUTPUT:
// Start
// End
// setTimeout (macrotask)
// Promise.then inside setTimeout (microtask)
