import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
console.log("🚀 ~ apiBaseUrl:", apiBaseUrl)

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000
});