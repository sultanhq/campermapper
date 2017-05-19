import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SiteData from './siteData.json'
import { SiteList } from '../src/siteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Camper Mapper</h2>
        </div>
        <p className="App-intro">
        </p>
        <SiteList
          sites={SiteData.sites}
          />
      </div>
    );
  }
}

export default App;
