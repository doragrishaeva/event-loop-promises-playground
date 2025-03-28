// Multiple async requests with timeout using Promise.all

// USE WHEN: need several async requests at the same time (promise.race() just set the limitation)

console.log("Start");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchDataWithTimeout = (url, timeout) => {
  return Promise.race([
    fetch(url).then((response) => response.json()),
    delay(timeout).then(() => {
      throw new Error("Request timed out");
    }),
  ]);
};

Promise.all([
  fetchDataWithTimeout("https://jsonplaceholder.typicode.com/posts", 2000),
  fetchDataWithTimeout("https://jsonplaceholder.typicode.com/users", 2000),
])
  .then((results) => {
    console.log("All data fetched:", results);
  })
  .catch((error) => console.log("Error:", error));

console.log("End");
