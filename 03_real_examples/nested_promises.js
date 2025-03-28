// Nested Promises example

console.log("Start");

const fetchData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      return data;
    });
};

fetchData("https://jsonplaceholder.typicode.com/users")
  .then((users) => {
    // we need first fetch for this second one
    return fetchData(
      `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
    );
  })
  .then((posts) => {
    console.log("Fetched posts:", posts);
  })
  .catch((error) => console.error("Error:", error));

console.log("End");

// OUTPUT:
// Start
// End
// Fetched data: [user data]
// Fetched posts: [posts data]
