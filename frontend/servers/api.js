import axios from 'axios';

const guessApiBase = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) return envUrl;
  const { protocol, hostname } = window.location;
  const host = /\d+\.\d+\.\d+\.\d+/.test(hostname) ? hostname : 'localhost';
  return `${protocol}//${host}:3001/api`;
};

const API_BASE_URL = guessApiBase();

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const termsAPI = {
  getAll: () => api.get('/terms'),
};


export default api;
