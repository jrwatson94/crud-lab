import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'

class Reviews extends Component {
  renderReviews = () => {
    console.log(this.props)
    return this.props.reviews.map(review => <Review {...review} key={review.id}/>)
  }
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

const msp = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(msp,null)(Reviews);