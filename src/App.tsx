import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from './store';
import Routes from './routes';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
