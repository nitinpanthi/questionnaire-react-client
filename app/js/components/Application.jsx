import React from 'react';
// import Provider from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import Header from './header/Header';
import Main from './Main';
import Footer from './Footer';

// const store = createStore(() => [], {}, applyMiddleware());

const Application = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Application;
