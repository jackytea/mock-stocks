import axios from 'axios';

// axios instance
const api = axios.create({ baseURL: process.env.REACT_APP_STOCKS_API });

// send jwt token in request if user is logged in
api.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// authentication and user
export const register = (formInput) => api.post('/user/register', formInput);
export const login = (formInput) => api.post('/user/login', formInput);
export const userInfo = () => api.get('/user/userinfo');
export const updateUsername = (formInput) => api.patch('/user/username', formInput);
export const removeUser = () => api.delete('/user/removeuser');

// available market stocks
export const fetchStocks = () => api.get('/stocks');
export const fetchStock = (id) => api.get(`/stocks/${id}`);

// user bought stocks
export const purchasedStocks = () => api.get('/purchased');
export const purchasedStock = (id) => api.get(`/purchased/${id}`);
export const addPurchasedStock = (formInput) => api.post('/purchased', formInput);
export const updatePurchasedStock = (id, formInput) => api.patch(`/purchased/${id}`, formInput);
export const removePurchasedStock = (id) => api.delete(`/purchased/${id}`);

// transactions
export const fetchTransactions = () => api.get('/transactions');

//logs
export const fetchLogs = () => api.get('/logs');
