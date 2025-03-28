// Demonstrates the difference between Promise.resolve() and Promise.reject()

console.log("Start");

Promise.resolve("Resolved").then((result) => console.log(result)); // Output: "Resolved"

Promise.reject("Rejected").catch((error) => console.log(error)); // Output: "Rejected"

console.log("End");

// OUTPUT:
// Start
// End
// Resolved
// Rejected
