import React from 'react'
import Senators from './Senators'
import { shallow } from 'enzyme'


it(`contains both h1 tags for each major party`, () => {
  const wrapped = shallow(<Senators />)
  expect(wrapped.find('h1')).toHaveLength(2)
})

it(`state: query is empty by default`, () => {
  const wrapped = shallow(<Senators />)
  expect(wrapped.state('query')).toBeFalsy()
})


