import axios from 'axios';

const BASE_URL = 'http://43.201.167.198/8080';
// const BASE_URL = 'http://localhost:8080';

export const postInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Content-Length': '60',
  },
});
