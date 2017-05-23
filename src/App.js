import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SiteList } from '../src/SiteList';
import { MapContainer } from '../src/MapContainer';
import * as firebase from 'firebase';

class App extends Component {

  constructor(){
    super();
    this.state = {
      siteData: {
        "sites": [

        ]
      },

      selectedSite: null,
    };
    this.moveMap = this.moveMap.bind(this)
  }

  moveMap = (e) => {
    this.setState({selectedSite: e.id,
    zoom: {value: 10}})
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
              moveMap={this.moveMap}
              sites={this.state.siteData.sites}
            />
          </div>
          <div className='mapContainer'>
            <MapContainer
              sites={this.state.siteData.sites}
              selectedSite={this.state.selectedSite}
              />
          </div>
        </div>
      </div>
    );
  };

}


export default App;
