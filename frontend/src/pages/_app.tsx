import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css';



const MyApp = ({ Component, pageProps }: any) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
