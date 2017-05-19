import React, { Component } from 'react';

export class Site extends Component {
  render ()
  {
    const data = this.props.site
    // console.log(data);
    if ("undefined" === typeof data) {
      return(
        <div className="site"></div>
      );
    }
    const siteDetails = (
      <li key={data.id}>
        <div className="Name">{data.name}</div>
        <div className="Price">{data.price}</div>
      </li>
    );

    return (
      <div className="site">
          { siteDetails }
      </div>
    );
  }
};
