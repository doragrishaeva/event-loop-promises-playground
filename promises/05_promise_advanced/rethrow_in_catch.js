// Demonstrates rethrowing an error in a .catch block

console.log("Start");

new Promise((resolve, reject) => {
  reject("Error in promise");
})
  .catch((error) => {
    console.log("Caught error:", error); // Output: "Caught error: Error in promise"
    throw new Error("New error");
  })
  .catch((error) => {
    console.log("Caught rethrown error:", error); // Output: "Caught rethrown error: Error: New error"
  });

console.log("End");

// OUTPUT:
// Start
// End
// Caught error: Error in promise
// Caught rethrown error: Error: New error
