import React, {
  Component
} from 'react';
import {
  Gmaps,
  Marker
} from 'react-gmaps';
// import {
//   GMAPS_API_KEY
// } from './.env.js';


const params = {
  v: '3.exp',
  key: process.env['GMAPS_API_KEY']
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: 54.7115618,
        lng: -6.0656706
      },
      zoom: {value: 6},
    };
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false,
      streetViewControl: false
    });
  }

  centerMap() {
    this.map.panTo({
      lat: this.lat,
      lng: this.lng
    })
  }

  render() {

    const data = this.props.sites

    const createMarkers = data.map((data) =>
      <Marker key={data.id}
        lat={data.lat}
        lng={data.lng}
        label={"" + data.id}
        onClick={this.centerMap}
        />
    );

    return (
      <div className='map'>
        <Gmaps id='gmaps'
        width={'70vw'}
        height={'80vh'}
        lat={this.state.coords.lat}
        lng={this.state.coords.lng}
        zoom={this.state.zoom.value}
        loadingMessage={'Map Loading'}
        params={params}
        onMapCreated={this.onMapCreated}>
        { createMarkers }
        </Gmaps>
      </div>
    );
  };

};
