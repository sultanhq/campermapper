import React, {
  Component
} from 'react';
import {
  Gmaps,
  Marker
} from 'react-gmaps';
const params = {
  v: '3.exp',
  key: process.env.REACT_APP_GMAPS_API_KEY
};

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      siteData: {
        "sites": [

        ]
      },
      coords: {
        lat: 54.7115618,
        lng: -6.0656706
      },
      zoom: {
        value: 6
      },
      selectedSite: null,
    };
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false,
      streetViewControl: false
    });
  }

  centerMap() {
    this.map.setCenter({
          lat: this.lat,
          lng: this.lng
        })
  }

  componentDidUpdate(nextProps) {
    const newSite = this.props.selectedSite !== nextProps.selectedSite
    if (newSite){
      var id = nextProps.selectedSite
      var siteArrayPos = this.props.sites.map(function(e) {
        return e.id;
      }).indexOf(id)
      this.setState({
        coords: {
          lat: this.props.sites[this.props.selectedSite].lat,
          lng: this.props.sites[this.props.selectedSite].lng
        },
        zoom: {
          value: 10
        },
      })
    }
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
