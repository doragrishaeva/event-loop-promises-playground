// Demonstrates the behavior of Promise.all with multiple promises

// Promise.all takes an array of promises and:
// - waits for all of them to fulfill, then returns an array of results (in order how they were declared in arrayб not in order of being fullfiled)
// - rejects immediately if any promise is rejected (with that error)

console.log("Start");

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Second"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, "Third"));

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results)) // Output: ["First", "Second", "Third"]
  .catch((error) => console.log(error));

console.log("End");

// OUTPUT:
// Start
// End
// ["First", "Second", "Third"]
