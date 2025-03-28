// Demonstrates retrying a fetch request if Promise is rejected

console.log("Start");

function fetchWithRetry(url, retries) {
  return fetch(url)
    .then((response) => {
      if (!response.ok && retries > 0) {
        return fetchWithRetry(url, retries - 1);
      }
      return response;
    })
    .catch(() => {
      if (retries > 0) {
        return fetchWithRetry(url, retries - 1);
      }
      throw new Error("Failed after retries");
    });
}

fetchWithRetry("https://api.example.com", 3)
  .then((response) => console.log("Success"))
  .catch((error) => console.log(error));

console.log("End");

// OUTPUT:
// Start
// End
// Success (or "Failed after retries" if retries exhausted)
