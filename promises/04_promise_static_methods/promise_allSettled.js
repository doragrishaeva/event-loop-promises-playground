// Demonstrates the behavior of Promise.allSettled with multiple promises

// Promise.allSettled waits for all promises to settle (either fulfilled or rejected)
// - Returns an array of objects with "status" and either "value" (for fulfilled) or "reason" (for rejected)
// - Unlike Promise.all(), it does not stop if one of the promises rejects

console.log("Start");

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((_, reject) => setTimeout(reject, 500, "Second"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1500, "Third"));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log(results)) // Output: [{"status":"fulfilled", "value":"First"}, {"status":"rejected", "reason":"Second"}, {"status":"fulfilled", "value":"Third"}]
  .catch((error) => console.log(error));

console.log("End");

// OUTPUT:
// Start
// End
// [{"status":"fulfilled", "value":"First"}, {"status":"rejected", "reason":"Second"}, {"status":"fulfilled", "value":"Third"}]
