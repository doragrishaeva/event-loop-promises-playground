console.log("Start");

document.getElementById("button").addEventListener("click", () => {
  console.log("Button clicked");

  Promise.resolve().then(() => console.log("Promise inside event"));

  console.log("End of event handler");
});

console.log("End");

// OUTPUT:
// Start
// End
// Button clicked
// End of event handler
// Promise inside event
