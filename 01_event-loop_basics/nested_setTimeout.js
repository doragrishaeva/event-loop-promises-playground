// Demonstrates how nested setTimeouts are added to the macrotask queue in separate cycles
// Each setTimeout schedules its callback into the macrotask queue, which is only processed after the call stack is empty.

console.log("Start");

setTimeout(() => {
  console.log("First timeout");

  setTimeout(() => {
    console.log("Nested timeout");
  }, 0);
}, 0);

console.log("End");

// OUTPUT:
// Start
// End
// First timeout
// Nested timeout
