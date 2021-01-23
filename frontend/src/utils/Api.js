import axios from 'axios';

export const api = (url, data, method, params, token) => {

    const request = axios({
        method,
        url: url,
        data: JSON.stringify(data),
        params,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token ? 'Bearer ' + token : ''
        }
    })

    return request
}