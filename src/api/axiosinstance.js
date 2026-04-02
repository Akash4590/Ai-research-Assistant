// src/api/axiosInstance.js
import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'http://localhost:5000/api', // or your deployed backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosinstance;
