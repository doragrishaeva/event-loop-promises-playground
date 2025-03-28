// Demonstrates how a long synchronous task blocks the execution of macrotasks like setTimeout

console.log("Start");

setTimeout(() => {
  console.log("setTimeout (macrotask)");
}, 0);

// Simulate heavy computation
for (let i = 0; i < 1e9; i++) {
  // Just burn CPU cycles
}

console.log("End");

// OUTPUT:
// Start
// End
// (delay...)
// setTimeout (macrotask)
