import React from 'react'
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { Map } from '../src/map';
import { expect } from 'chai';


describe ('Map', () => {
  it('should render an empty div with "map" class', () => {
    const component = renderIntoDocument(
      <Map />
    );

    const siteElement = findRenderedDOMComponentWithClass(component, 'map');

    expect(siteElement).to.be.ok;
  });
});
