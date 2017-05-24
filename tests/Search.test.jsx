import React from 'react';
import renderer from 'react-test-renderer';
import {Search} from '../src/Search';

describe('Search', () => {
	it ('a has a Search div', () => {
		const component = renderer.create(
			<Search className="Search" />
    ).toJSON();
		expect(component).toMatchSnapshot();
	});
});
