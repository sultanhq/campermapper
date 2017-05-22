import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import * as firebase from 'firebase';
import { FIREBASE_OPTIONS } from '../src/.env.js';

firebase.initializeApp(FIREBASE_OPTIONS);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
