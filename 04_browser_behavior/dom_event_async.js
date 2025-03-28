console.log("Start");

document.getElementById("button").addEventListener("click", async () => {
  console.log("Button clicked");

  // synchronous code
  setTimeout(() => console.log("setTimeout"), 0);

  // asynchronous codegjx
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log("Promise finished");
});

console.log("End");

// OUTPUT:
// Start
// End
// Button clicked
// Promise finished
// setTimeout
