// Demonstrates how Promise.catch() handles errors and microtasks

console.log("Start");

Promise.reject("Error")
  .catch((error) => {
    console.log("Caught:", error);
    return "Recovered";
  })
  .then((result) => console.log(result)); // Recovered

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

// OUTPUT:
// Start
// End
// Caught: Error
// Recovered
// Timeout
