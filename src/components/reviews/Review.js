import React, { Component } from 'react';
import {connect} from 'react-redux'

class Review extends Component {
  clickHandler = () => {
    this.props.deleteReview(this.props.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.text}
        </li>
        <button onClick={this.clickHandler}> X </button>
      </div>
    );
  }

};

const mdp = dispatch => {
  return {
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id: id})
  }
}

export default connect(null, mdp)(Review);
