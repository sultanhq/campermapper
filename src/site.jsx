import React, { Component } from 'react';

export class Site extends Component {
  render ()
  {
    const { site } = this.props;
    return (
        <div className="site">
          { site }
        </div>
    );
  }
};
