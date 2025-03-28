// Demonstrates how multiple setTimeouts with different delays are handled in the macrotask queue

console.log("Start");

setTimeout(() => {
  console.log("setTimeout 1 (0ms)");
}, 0);

setTimeout(() => {
  console.log("setTimeout 2 (100ms)");
}, 100);

setTimeout(() => {
  console.log("setTimeout 3 (50ms)");
}, 50);

console.log("End");

// OUTPUT:
// Start
// End
// setTimeout 1 (0ms)
// setTimeout 3 (50ms)
// setTimeout 2 (100ms)
