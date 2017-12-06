import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import Senators from './Senators'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Senators)).toHaveLength(1)
})
