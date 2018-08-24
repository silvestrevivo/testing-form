import React from 'react'
import { shallow } from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
// we are going to test that both components exist

let wrapped
// we get an error with const

beforeEach(() => {
  wrapped = shallow(<App />)
  // fot both test, I need the component in a global variable
  // on this way I avoid to repeat myself on each testing
  // before each test is started | shallow => the component isolated
})

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
  // expect returns always an Array
})

it('shows CommentList', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
  // expect returns always an Array
})

/*
Basically, a test contents a number of things:

  1. it() declaration, where we say what is gonna happen

  2. A definition of the element to test

  3. Testing

  4. Unmount element to test

A possible first scenario would be:

  it('shows a comment box', () => {

    const div = document.createElement('div);

    ReactDOM.render(>App />, div);

    expect(div.innerHTML).toContain('Comment Box);

    ReactDOM.unmountComponentAtNode(div);

  })

  This is a bad approach because it does not cover the generic cases

  That is why we use Enzyme

*/

/*
Enzyme API has three ways to make an instance of the element to test

  1. Static => Render the given component a return a plain HMTL element

  2. Shallow => Render just the component and NONE of its childrens

  3. FullDom => Render just the component and ALL of its childrens
*/
