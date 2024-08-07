function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an API call that resolves after some time
        setTimeout(() => {
            resolve("Data from API");
        }, 1000); // Resolving after 1 second
    });
}

export default getResponseFromAPI;
