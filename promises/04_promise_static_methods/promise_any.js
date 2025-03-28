// Demonstrates the behavior of Promise.any, which resolves as soon as any promise resolves

// Promise.any() takes an array of promises and:
// - returns the result of the first fulfilled promise (the one that resolves first)
// - ignores the rejected promises and does not wait for them
// - if all promises are rejected, it rejects with an AggregateError containing all rejection reasons

console.log("Start");

const promise1 = new Promise((_, reject) => setTimeout(reject, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Second"));

Promise.any([promise1, promise2])
  .then((result) => console.log(result)) // Output: "Second" (first to resolve)
  .catch((error) => console.log(error));

console.log("End");

// OUTPUT:
// Start
// End
// Second
