// Demonstrates the difference between .finally() and .then()

console.log("Start");

new Promise((resolve, reject) => {
  resolve("Success");
})
  .then((result) => {
    console.log(result); // Output: "Success"
  })
  .finally(() => {
    console.log("Finally block executed"); // Output: "Finally block executed"
  });

new Promise((resolve, reject) => {
  resolve("Success");
})
  .finally(() => {
    console.log("Finally block executed"); // Output: "Finally block executed"
  })
  .then((result) => {
    console.log(result); // Output: "Success"
  });

console.log("End");

// OUTPUT:
// Start
// End
// Success
// Finally block executed
// Finally block executed
// Success
