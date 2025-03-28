// Demonstrates how errors in Promises are handled with .catch() and stay in the microtask queue

console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("Inside .then");
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.log("Caught error:", err.message);
  });

console.log("End");

// OUTPUT:
// Start
// End
// Inside .then
// Caught error: Something went wrong

// If you throw inside a .then(), it doesn’t crash the code.
// The error is automatically passed to the next .catch() in the chain.
// This all happens inside the microtask queue, after synchronous code, but before any macrotasks.
