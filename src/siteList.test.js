import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass,
	scryRenderedComponentsWithType
} from 'react-dom/test-utils';
import { SiteList } from '../src/siteList';
import { Site } from '../src/site';
import { expect } from 'chai';

describe('SiteList', () => {
	it('should render a div with "siteList" class', () => {
		const sites = []
		const component = renderIntoDocument(
			<SiteList
				sites={sites}
			/>
		);
		const siteListElement = findRenderedDOMComponentWithClass(component, 'siteList');

		expect(siteListElement).to.be.ok
	});

	it('should render a Site component for each item', () => {
		const sites = ["Hammerwood", "Downe", "Frylands"];
		const component = renderIntoDocument(
			<SiteList
				sites={sites}
			/>
		);
		const sitesElement = scryRenderedComponentsWithType(component, Site);

		expect(sitesElement.length).to.equal(3);
	});
});
