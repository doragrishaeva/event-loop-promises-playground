// Demonstrates that setTimeouts are scheduled based on registration order, not just delay time

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1 (100ms)");
}, 100);

setTimeout(() => {
  console.log("Timeout 2 (0ms)");
}, 0);

setTimeout(() => {
  console.log("Timeout 3 (50ms)");
}, 50);

console.log("End");

// OUTPUT:
// Start
// End
// Timeout 2 (0ms)
// Timeout 3 (50ms)
// Timeout 1 (100ms)
