import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
