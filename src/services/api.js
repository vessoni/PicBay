import axios from 'axios';

const apiKey = '6473511-0417f2cad683f1bee54cafe15';
const api = axios.create({
  baseURL: `https://pixabay.com/api/?key=${apiKey}`,
});

export default api;
