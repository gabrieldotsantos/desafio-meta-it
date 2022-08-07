import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:7243/api/"
})

axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export { api };