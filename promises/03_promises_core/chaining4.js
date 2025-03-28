// Demonstrates catch inside a chain and recovery + nested finally/catch behavior

console.log("Start");

Promise.resolve("Initial")
  .then((res) => {
    console.log("Then 1:", res);
    throw "Error in then 1";
  })
  .catch((err) => {
    console.log("Catch 1:", err);
    return "Recovered in catch 1";
  })
  .then((res) => {
    console.log("Then 2:", res);
    throw "Error in then 2";
  })
  .finally(() => {
    console.log("Finally here"); // executes regardless
  })
  .then((res) => {
    console.log("Then 3:", res); // this will NOT run (previous threw)
  })
  .catch((err) => {
    console.log("Catch 2:", err);
  });

console.log("End");

// OUTPUT:
// Start
// End
// Then 1: Initial
// Catch 1: Error in then 1
// Then 2: Recovered in catch 1
// Finally here
// Catch 2: Error in then 2
