const axios = require('axios');

export const Fetch = async (URL: String, Method: String, data?: any, headers?: any) => {

    let request = {
        method: Method || 'GET',
        url: URL,
        // baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: {...headers},
        data: {...data}
    }
    return await axios(request);
};