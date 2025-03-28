// Demonstrates the behavior of Promise.race with multiple promises

// Promise.race() takes an array of promises and:
// - returns the result of the first promise that resolves or rejects
// - if the first promise resolves, it returns the resolved value
// - if the first promise rejects, it returns the rejection reason (error)
// - does not wait for other promises once one is settled

console.log("Start");

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Second"));

Promise.race([promise1, promise2])
  .then((result) => console.log(result)) // Output: "Second" (first to resolve)
  .catch((error) => console.log(error));

console.log("End");

// OUTPUT:
// Start
// End
// Second
