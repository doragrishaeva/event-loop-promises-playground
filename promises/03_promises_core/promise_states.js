// Demonstrates the three states of a promise: Pending, Fulfilled, and Rejected

console.log("Start");

const pendingPromise = new Promise((resolve, reject) => {
  console.log("Promise is pending...");
  setTimeout(resolve, 1000, "Fulfilled");
});

pendingPromise
  .then((result) => console.log(result)) // Output after 1 second: "Fulfilled"
  .catch((error) => console.log(error));

console.log("End");

// OUTPUT:
// Start
// Promise is pending...
// End
// Fulfilled (after 1 second)
