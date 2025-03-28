// Demonstrates how .finally() works regardless of the promise outcome

console.log("Start");

new Promise((resolve, reject) => {
  resolve("Success");
})
  .then((result) => {
    console.log(result); // Output: "Success"
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally block executed"); // Output: "Finally block executed"
  });

console.log("End");

// OUTPUT:
// Start
// End
// Success
// Finally block executed
