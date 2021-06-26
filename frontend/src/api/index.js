import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_STOCKS_API });

api.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// authentication
export const register = (formInput) => api.post('/user/register', formInput);
export const login = (formInput) => api.post('/user/login', formInput);

// available market stocks
export const fetchStocks = () => api.get('/stocks');
export const fetchStock = (id) => api.get(`/stocks/${id}`);

// user bought stocks
export const purchasedStocks = () => api.get('/purchased');
export const purchasedStock = (id) => api.get(`/purchased/${id}`);
export const addPurchasedStock = (formInput) => api.post('/purchased', formInput);
export const updatePurchasedStock = (id, formInput) => api.patch(`/purchased/${id}`, formInput);
export const removePurchasedStock = (id) => api.delete(`/purchased/${id}`);
