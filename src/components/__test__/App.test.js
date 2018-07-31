import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
// we are going to test that both component exist

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
  // fot both test, I need the component in a global variable
  // before each test is started | shallow => the component isolated
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows CommentList', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
