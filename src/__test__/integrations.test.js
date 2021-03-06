import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', () => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>,
  )

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click')

  // We are gonna introduce a small pause to solve the asynchronous behaviour
  moxios.wait(() => {
    // Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(2)

    done()
    wrapped.unmount()
  })
})

/*
With integration test we do not test an expecific part of the code: many parts
of the code are tested because they are correlated.
*/
