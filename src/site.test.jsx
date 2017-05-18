import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { Site } from '../src/site';
import { expect } from 'chai';


describe('Site', () => {
	it('should render a div with "site" class', () => {
		const component = renderIntoDocument(
			<Site />
		);
		const siteElement = findRenderedDOMComponentWithClass(component, 'site');

		expect(siteElement).to.be.ok;
	});

	it('should render a div with the site text', () => {
		const site = 'Hammerwood';
		const component = renderIntoDocument(
			<Site
				 	site= {site}
				/>
		);

		const siteElement = findRenderedDOMComponentWithClass(component, 'site');

		const siteText = siteElement.textContent

		expect(siteText).to.equal('Hammerwood');

	});
});
