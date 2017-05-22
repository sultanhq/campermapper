import React, { Component } from 'react';
import { Site } from './Site';

export class SiteList extends Component {
  render()
  {
    const data = this.props.sites
    const sitesList = data.map((data, index) =>
      <ul key={index}>
        <Site
          site={data}
        />
      </ul>
    );

    if ("undefined" === typeof data) {
      return(
        <div className="siteListContainter"></div>
      );
    }
    return (
      <div className="siteListContainter">
          { sitesList }
      </div>
    );
  }
};
