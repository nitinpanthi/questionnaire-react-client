import React from 'react';
import Provider from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './header/Header';
import Main from './Main';
import Footer from './Footer';
import store from '../store';

export default function Application() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
