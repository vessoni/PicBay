import axios from 'axios';

const apiKey = '15100746-99cd627894bf91afe37d0033e';
const api = axios.create({
  baseURL: `https://pixabay.com/api/?key=${apiKey}`,
});

export default api;
