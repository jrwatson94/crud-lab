import React, { Component } from 'react';
import {connect} from 'react-redux'
class RestaurantInput extends Component {
  state = {
    name: ''
  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.name)
    this.setState({
      name:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Add Restaurant</label><br></br>
          <input onChange={this.changeHandler}type="text" name="name" value={this.state.name}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

const mdp = dispatch => {
  return {
    addRestaurant: name => dispatch({type: "ADD_RESTAURANT", name})
  }
}

export default connect(null,mdp)(RestaurantInput);
