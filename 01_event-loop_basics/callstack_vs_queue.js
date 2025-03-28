// Demonstrates the difference between synchronous execution (call stack)
// and asynchronous tasks (macrotasks via setTimeout)

console.log("1: Start"); // Sync -> goes to the stack

setTimeout(() => {
  console.log("2: Inside setTimeout"); // Async -> goes to the Macrotask queue
}, 0);

console.log("3: End"); // sync -> goes to the stack

// OUTPUT:
// 1: Start
// 3: End
// 2: Inside setTimeout
