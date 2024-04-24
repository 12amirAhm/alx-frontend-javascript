
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      resolve("API response data");
      // In a real-world scenario, you might replace the above resolve() with reject() 
      // if there's an error in fetching the data from the API
    }, 1000);
  });
}
