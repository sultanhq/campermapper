import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SiteList } from '../src/siteList';
import { MapContainer } from '../src/MapContainer';
import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      siteData: {
        "sites": [

        ]
      }
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('databases');
    const siteDataRef = rootRef.child('siteData');
      siteDataRef.on('value', snap => {
        this.setState({
          siteData: snap.val()
        });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Camper Mapper</h2>
        </div>
        <div className="View">
          <div className='siteListContainer'>
            <SiteList
            sites={this.state.siteData.sites}
            />
          </div>
          <div className='mapContainer'>
            <MapContainer
              sites={this.state.siteData.sites}
              />
          </div>
        </div>
      </div>
    );
  };

}


export default App;
