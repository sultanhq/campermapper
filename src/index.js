import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { FIREBASE_OPTIONS } from './.env.js';
import * as firebase from 'firebase';

const FIREBASE_OPTIONS = {
apikey:process.env.REACT_APP_FIREBASE_API_KEY,
authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
databaseURL:process.env.REACT_APP_FIREBASE_DATABASEURL,
}
console.log(process.env)
firebase.initializeApp(FIREBASE_OPTIONS);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
