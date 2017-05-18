import React, { Component } from 'React';
import { Site } from './site';

export class SiteList extends Component {
  render()
  {
    const { sites } = this.props;
    return (
      <div className="siteList">
        <ul>
          { sites.map((site, index) => (
            <li key={index}>
              <Site site={site} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
