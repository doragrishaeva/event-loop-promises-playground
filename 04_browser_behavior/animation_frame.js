console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

requestAnimationFrame(() => {
  console.log("requestAnimationFrame");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// OUTPUT:
// Start
// End
// Promise
// requestAnimationFrame
// setTimeout

// requestAnimationFrame() is executed before macrotasks,
// but after all synchronous code and microtasks. It is part of the browser's rendering cycle,
// ensuring that it is called before the next paint/frame is rendered.
// While it is not strictly a microtask or macrotask,
// it behaves similarly to a macrotask but has a higher priority in the event loop.
