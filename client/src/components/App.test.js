import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('should render without exploding', () => {
  expect(wrapper).toMatchSnapshot()
})