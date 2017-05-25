import React from 'react';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils'; // ES6
import {Search} from '../src/Search';

import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('Search', () => {
	it ('a has a Search div', () => {
		const component = renderer.create(
      <div>
        <form
        className="searchForm"
        onSubmit={[Function]}>
        <input
          label="Search"
          onChange={[Function]}
          type="text"
          value="" />
        <input
          type="submit"
          value="search!" />
        </form>
      </div>
    ).toJSON();
		expect(component).toMatchSnapshot();
	});

  it ('search returns JSON', () => {
    const onMessageSend = jest.fn()

    const wrapper = shallow(
      React.createElement(Search, {
        onMessageSend
      })
    )

    wrapper.find('input').simulate('change', {target: {value: 'A test message'} })
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect(onMessageSend).toHaveBeenCalledWith('A test message')

  });

});
