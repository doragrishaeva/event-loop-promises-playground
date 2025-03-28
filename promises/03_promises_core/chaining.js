// Demonstrates how returning values from .then() affects promise chaining

console.log("Start");

new Promise((resolve) => resolve("First"))
  .then((result) => {
    console.log(result); // Output: "First"
    return "Second";
  })
  .then((result) => {
    console.log(result); // Output: "Second"
    return "Third";
  })
  .then((result) => {
    console.log(result); // Output: "Third"
  });

console.log("End");

// OUTPUT:
// Start
// End
// First
// Second
// Third
