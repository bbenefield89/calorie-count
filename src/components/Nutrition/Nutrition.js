import React, { Component } from 'react';
import axios from 'axios';

import NutritionList from './NutritionList';

class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nutritionData: []
    }
  }

  componentDidMount() {
    const request = {
      method: 'GET',
      url: '/api/nutrition/',
      headers: { Authorization: `Token ${ this.props.authToken }` }
    }

    axios(request)
      .then(({ data }) => {
        console.log(data);
        this.setState({ nutritionData: [ ...data ] })
      })
      .catch(err => console.log(err));
  }

  render() { 
    return (
      this.state.nutritionData
      ?
        <NutritionList nutritionData={ this.state.nutritionData } />
      :
        <h2>Loading Nutrition Data...</h2>
    );
  }
}
 
export default Nutrition;