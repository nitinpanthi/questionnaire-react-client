import ReactDOM from 'react-dom';
import React from 'react';
import Modal from 'react-modal';
import Application from './components/Application';

const appElement = document.getElementById('app');

Modal.setAppElement(appElement);
ReactDOM.render(<Application />, appElement);
