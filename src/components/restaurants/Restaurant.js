import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import {connect} from 'react-redux'

class Restaurant extends Component {

  deleteHandler = () => {
    this.props.deleteRestaurant(this.props.name)
  }

  render() {
    return (
      <div>
        <li>
          <p>{this.props.name}</p>
          <button onClick={this.deleteHandler}> X </button>
          <ReviewsContainer restaurant={this.props}/>
        </li>
      </div>
    );
  }
};

const mdp = dispatch => {
  return {
    deleteRestaurant: name => dispatch({type: "DELETE_RESTAURANT", name})
  }
}

export default connect(null,mdp)(Restaurant);
