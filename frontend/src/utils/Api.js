import axios from 'axios';

export const api = (url, data, method, params) => {

    const request = axios({
        method,
        url: url,
        data: JSON.stringify(data),
        params,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    return request
}