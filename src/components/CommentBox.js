import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {
  state = {
    comment: '',
  }

  handlerSubmit = e => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={e => this.setState({ comment: e.target.value })} />
        <div>
          <button>Submit Comment</button>
        </div>
        <button className="fetch-comments" onClick={this.props.fetchComment}>Fetch Comments</button>
      </form>
    )
  }
}

export default connect( null, actions )(CommentBox)
