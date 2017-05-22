import React, { Component } from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { Menu } from '../src/Menu';
import { expect } from 'chai';

describe('Menu', () => {
  it ('a menu div is rendered', () => {
    const component = renderIntoDocument(
      <Menu />
    );
    const menuElement = findRenderedDOMComponentWithClass(component, 'Menu');
    expect(menuElement).to.be.ok;
  });
});
