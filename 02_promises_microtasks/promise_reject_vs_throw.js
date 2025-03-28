// Demonstrates the difference between Promise.reject and throw inside a .then()

console.log("Start");

Promise.reject("Rejected directly").catch((err) => {
  console.log("Caught from Promise.reject:", err);
});

Promise.resolve()
  .then(() => {
    throw "Thrown inside .then()";
  })
  .catch((err) => {
    console.log("Caught from throw in .then:", err);
  });

console.log("End");

// OUTPUT:
// Start
// End
// Caught from Promise.reject: Rejected directly
// Caught from throw in .then: Thrown inside .then()
