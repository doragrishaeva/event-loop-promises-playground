// Demonstrates how queueMicrotask places a task in the microtask queue

console.log("Start");

queueMicrotask(() => console.log("Microtask 1"));

Promise.resolve().then(() => {
  console.log("Promise");
  queueMicrotask(() => console.log("Microtask 2"));
});

console.log("End");

// OUTPUT:
// Start
// End
// Microtask 1
// Promise
// Microtask 2
