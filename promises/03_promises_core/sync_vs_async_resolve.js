// Demonstrates the behavior of Promise.resolve() with a sync value vs async resolution

console.log("Start");

Promise.resolve("Synchronous Resolution").then((result) => {
  console.log(result); // Output: "Synchronous Resolution"
});

new Promise((resolve) => {
  resolve("Asynchronous Resolution");
}).then((result) => {
  console.log(result); // Output: "Asynchronous Resolution"
});

console.log("End");

// OUTPUT:
// Start
// End
// Synchronous Resolution
// Asynchronous Resolution
