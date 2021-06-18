import axios from 'axios';

const url = `${process.env.REACT_APP_STOCKS_API}/stocks`;

export const fetchStocks = () => axios.get(url);
