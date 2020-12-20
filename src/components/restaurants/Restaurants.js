import React, { Component } from 'react';
import {connect} from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  renderRestaurants = () => {
    return this.props.restaurants.map(rest => <Restaurant {...rest} key={rest.id}/>)
  }
  render() {
    console.log(this.props)
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

const msp = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(msp, null)(Restaurants);