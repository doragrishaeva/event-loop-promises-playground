// Delay between requests using async/await and setTimeout
// Second request is not in then() but guaranteed by delay

console.log("Start");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchDataSequentially() {
  const firstRequest = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const firstData = await firstRequest.json();
  console.log("First data:", firstData);

  await delay(1000); // 1-second delay before the second request

  const secondRequest = await fetch(
    "https://jsonplaceholder.typicode.com/posts/2"
  );
  const secondData = await secondRequest.json();
  console.log("Second data:", secondData);
}

fetchDataSequentially().catch((error) => console.log("Error:", error));

console.log("End");
