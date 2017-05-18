import React from 'react';
import {
	renderIntoDocument,
	findRenderedDOMComponentWithClass
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
});
