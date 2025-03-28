// Demonstrates how nested setTimeouts are executed in separate event loop ticks (macrotask → macrotask → ...)

console.log("Start");

// Macrotask 1
setTimeout(() => {
  console.log("Timeout 1");

  // Macrotask 2
  setTimeout(() => {
    console.log("Timeout 2");

    // Macrotask 3
    setTimeout(() => {
      console.log("Timeout 3");
    }, 0);
  }, 0);
}, 0);

console.log("End");

// OUTPUT:
// Start
// End
// Timeout 1
// Timeout 2
// Timeout 3
