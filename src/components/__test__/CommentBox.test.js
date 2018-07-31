import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'
import Root from 'root'

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>,
  )
})

afterEach(() => {
  wrapped.unmount()
  // this occurs after each test occurs
  // recommended when we use mount() methode
})

it('has a text area and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
  // with describe, we can collect all the actions for the before each
  // => Don't repeat your self
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    })
    wrapped.update()
  })

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  })

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
