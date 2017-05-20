import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const coords = {
  lat: 51.241988,
  lng: -0.022966
};

const params = {v: '3.exp'};



export class MapContainer extends Component{


  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(data) {
    console.log('onClick', data);
    console.log(self);
  }

  message(i){
    console.log('message', i);

  }


  render(){

    const data = this.props.sites
    const markers = data.map((data) =>
       <Marker key={data.id}
        lat={data.lat}
        lng={data.lng}
        label={"" + data.id}
        />
    );
    return (
      <div className='map'>
        <Gmaps id='gmaps'
        width={'600px'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={10}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        { markers }
        </Gmaps>
      </div>
    );
  };

};
