import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default api;