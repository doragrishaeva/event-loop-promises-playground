// Demonstrates different ways to create Promises in JavaScript

// 1. Manual creation using new Promise
// USE WHEN: you want to convert things like callbacks, timeouts, or old API (fs.readFile, requestAnimationFrame and etc) into something awaitable or usable with .then().
const manualPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Manual Promise resolved"), 100);
});
manualPromise.then(console.log);

// 2. Instantly resolved promise
// USE WHEN: you want to wrap a value into a promise, so it can be awaited or chained.
const resolvedPromise = Promise.resolve("Promise.resolve()");
resolvedPromise.then(console.log);

// 3. Instantly rejected promise
// USE WHEN: for error simulation or early exits.
const rejectedPromise = Promise.reject("Promise.reject()");
rejectedPromise.catch(console.log);

// 4. Async function always returns a Promise (even if you return a value)
// USE WHEN: want to use await inside, to use try-catch inside
async function asyncFunc() {
  return "Returned from async function";
}
asyncFunc().then(console.log);
