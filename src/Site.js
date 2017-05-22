import React, { Component } from 'react';

export class Site extends Component {

  moveMap() {
    console.log("click")
    this.map.setCenter({
      lat: 51.141988,
      lng: -0.022966
    })
  }

  render ()
  {
    const data = this.props.site
    if ("undefined" === typeof data) {
      return(
        <div className="site"></div>
      );
    }

    const siteDetails = (
      <li key={data.id}>
        <div className="Name">{data.id + " : " +data.name}</div>
        <div className="Price">£{data.price} per night</div>
        <button className="Button" onClick={this.moveMap}>Show on map</button>
      </li>
    );

    return (
      <div className="site">
          { siteDetails }
      </div>
    );
  }
};
