import axios from 'axios';

const BASE_URL = 'http://43.201.167.198:8080';

export const postInstance = axios.create({
  baseURL: BASE_URL,
});
