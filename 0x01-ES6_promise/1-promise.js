function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ status: 200, body: 'Success' });
        } else {
            reject(new Error('The fake API is not working currently'));
        }
    });
}

// Testing the function
const successResponse = getFullResponseFromAPI(true);
const failureResponse = getFullResponseFromAPI(false);

successResponse
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

failureResponse
    .then(response => console.log(response))
    .catch(error => console.error(error.message));

export default getFullResponseFromAPI;
