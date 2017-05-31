import React, { Component } from 'react';
import { Site } from './Site';

export class SiteList extends Component {
  render()
  {
    const data = this.props.sites.sites
    const sitesList = Object.values(data).map((data, index) =>
        <Site key={index}
          site={data}
          moveMap={this.props.moveMap}
        />
    );

    if ("undefined" === typeof data) {
      return(
        <div className="siteListContainter"></div>
      );
    }
    return (
      <div className="siteListContainter">
          <ul>
              { sitesList }
          </ul>
      </div>
    );
  }
};
