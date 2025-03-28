// fetch + Promise + setTimeout combined flow
// USE CASE: Manage waiting time -> if response is longer than timeout, promise will be rejected

console.log("Start");

const fetchWithTimeout = (url, timeout) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject("Request timed out");
    }, timeout);

    clearTimeout(timer);
    if (!response.ok) {
      reject("Network response was not ok");
    }
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 2000)
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

console.log("End");

// OUTPUT:
// Start
// End
// Fetched data: [data from API or error message]
