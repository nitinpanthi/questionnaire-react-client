import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './header/Header';
import Main from './Main';
import Footer from './Footer';
import store from '../store';

const history = createBrowserHistory({});

export default function Application() {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </Router>
      </Provider>
    </div>
  );
}
