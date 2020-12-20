import React, { Component } from 'react';
import Review from './Review';
import {connect} from 'react-redux'

class Reviews extends Component {
  renderReviews = () => {
    const reviews = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)
    return reviews.map(review => <Review {...review} key={review.id}/>)
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