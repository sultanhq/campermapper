import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { FIREBASE_OPTIONS } from './.env.js';
import * as firebase from 'firebase';

firebase.initializeApp(process.env['FIREBASE_OPTIONS']);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
