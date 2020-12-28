import axios from 'axios';
const { GITHUB_TOKEN } = process.env;
const baseURL = 'https://api.github.com/graphql';
const headers = { Authorization: `Bearer ${GITHUB_TOKEN}` };

const api = axios.create({
  baseURL,
  headers,
});

export default api;
