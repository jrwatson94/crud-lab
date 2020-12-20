import React, { Component } from 'react';
import Reviews from './Reviews';

import {connect} from 'react-redux'

class ReviewInput extends Component {
  state={
    text: ''
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addReview(this.props.restaurant.id, this.state.text)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Add Review</label>
          <textarea onChange={this.changeHandler} name="text" value={this.state.text}></textarea>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

const mdp = dispatch => {
  return {
    addReview: (restId, text) => dispatch({type: "ADD_REVIEW", id: restId, text: text})
  }
}

export default connect(null,mdp)(ReviewInput);
