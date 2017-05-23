import React from 'react';
import renderer from 'react-test-renderer';
import {Home} from '../src/Home';

describe('Home', () => {
	it ('a has a link to homepage', () => {
		const component = renderer.create(
			<Home href="/">HOINK</Home>
    ).toJSON();

		// const homeElement = findRenderedDOMComponentWithClass(component, 'Home');
		// const url = homeElement.href
		console.log(component);
		expect(component).toMatchSnapshot();

	});
});
