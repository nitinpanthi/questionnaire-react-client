import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';

import Application from './components/Application';

ReactDOM.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('app'),
);
