// Demonstrates async/await with microtasks and macrotasks

console.log("Start");

async function asyncFunc() {
  console.log("Before await");
  await new Promise((resolve) => resolve());
  console.log("After await");
}

asyncFunc().then(() => console.log("Async done"));

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

// OUTPUT:
// Start
// Before await
// End
// Async done
// After await
// Timeout
