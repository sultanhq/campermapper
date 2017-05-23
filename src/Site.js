import React, { Component } from 'react';

export class Site extends Component {

  sendDetails = () => {
    var e = {id: this.props.site.id}
    this.props.moveMap(e)
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
        <button id={data.id} className="Button" onClick={this.sendDetails}>Show on map</button>
      </li>
    );

    return (
      <div className="site">
          { siteDetails }
      </div>
    );
  }
};
