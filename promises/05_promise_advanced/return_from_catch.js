// Demonstrates returning values from .catch() and continuing chaining

console.log("Start");

new Promise((resolve, reject) => {
  reject("Error in promise");
})
  .catch((error) => {
    console.log("Caught error:", error); // Output: "Caught error: Error in promise"
    return "Recovered";
  })
  .then((result) => {
    console.log(result); // Output: "Recovered"
  });

console.log("End");

// OUTPUT:
// Start
// End
// Caught error: Error in promise
// Recovered
