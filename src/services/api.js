// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu-endereco-de-api/api',
});

export const getServiceRequests = () => {
  return api.get('/service-requests');
};

export const createServiceRequest = (data) => {
  return api.post('/service-requests', data);
};


