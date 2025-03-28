// Demonstrates how synchronous blocking code delays execution of macrotasks like setTimeout

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout (should run after 0ms)");
}, 0);

// Blocking synchronous code
const start = Date.now();
while (Date.now() - start < 5000) {
  // Busy-wait for 5 seconds
}

console.log("End");

// OUTPUT:
// Start
// (5 second pause...)
// End
// Inside setTimeout (should run after 0ms)
