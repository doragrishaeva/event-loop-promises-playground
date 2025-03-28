// Demonstrates how setTimeout inside a Promise creates a macrotask after microtask is done

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise.then (microtask)");

  setTimeout(() => {
    console.log("setTimeout inside Promise (macrotask)");
  }, 0);
});

console.log("End");

// OUTPUT:
// Start
// End
// Promise.then (microtask)
// setTimeout inside Promise (macrotask)
