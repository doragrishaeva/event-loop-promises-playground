// Demonstrates how an error in a .then() skips to the nearest .catch()

console.log("Start");

Promise.resolve("Initial value")
  .then((value) => {
    console.log(value); // Output: Initial value
    throw new Error("Something went wrong");
  })
  .then(() => {
    console.log("This will not run");
  })
  .catch((error) => {
    console.log("Caught error:", error.message); // Output: Caught error: Something went wrong
    return "Recovered from error";
  })
  .then((result) => {
    console.log("Continued after catch:", result); // Output: Continued after catch: Recovered from error
  });

console.log("End");

// OUTPUT:
// Start
// End
// Initial value
// Caught error: Something went wrong
// Continued after catch: Recovered from error
