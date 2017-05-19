import React, { Component } from 'React';
import { Site } from './site';

export class SiteList extends Component {
  render()
  {
    const data = this.props.sites

    const sitesList = data.map((data, index) =>
      <li key={index}>
        <Site
          sites={data}
        />
      </li>
    );

    if ("undefined" === typeof data) {
      return(
        <div className="siteListContainter"></div>
      );
    }
    return (
      <div className="siteListContainter">
        <ul className="siteList">
          { sitesList }
        </ul>
      </div>
    );
  }
};
