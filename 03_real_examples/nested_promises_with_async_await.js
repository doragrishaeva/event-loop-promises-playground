// Nested Promises example using async/await

console.log("Start");

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchUserPosts = async () => {
  try {
    // get users
    const users = await fetchData("https://jsonplaceholder.typicode.com/users");

    if (users && users.length > 0) {
      const posts = await fetchData(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      );
      console.log("Fetched posts:", posts);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchUserPosts();

console.log("End");
