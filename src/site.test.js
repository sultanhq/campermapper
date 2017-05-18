import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { Site } from '../src/site';
import { expect } from 'chai';


describe('Site', () => {
	it('should render a div with "site" class', () => {
		const site = 'Hammerwood';
		const component = renderIntoDocument(
			<Site />
		);
		const siteElement = findRenderedDOMComponentWithClass(component, 'site');

		expect(siteElement).to.be.ok;
	});
});
