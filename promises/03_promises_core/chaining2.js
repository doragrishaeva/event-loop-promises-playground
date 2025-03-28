// Demonstrates how .catch() can handle an error and allow the chain to continue

console.log("Start");

new Promise((resolve, reject) => {
  reject("Initial Error");
})
  .catch((error) => {
    console.log("Caught:", error); // Output: Caught: Initial Error
    return "Recovered";
  })
  .then((result) => {
    console.log("Then after catch:", result); // Output: Then after catch: Recovered
    return "Next step";
  })
  .then((result) => {
    console.log("Final result:", result); // Output: Final result: Next step
  });

console.log("End");

// OUTPUT:
// Start
// End
// Caught: Initial Error
// Then after catch: Recovered
// Final result: Next step
