import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './components/misc/NavBar';
import LoggedInForm from './components/LoggedInForm';
import LoggedOutForm from './components/LoggedOutForm';

import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    authToken: ''
  }
  
  // showLoginForm
  showLoginForm = () => {
    this.setState({ loggedIn: true });
  }

  // hideLoginForm
  hideLoginForm = () => {
    this.setState({ loggedIn: false });
  }

  // submitLoginForm
  submitLoginForm = inputVals => {
    const request = {
      method: 'POST',
      url: '/api-token-auth/',
      data: inputVals
    }

    axios(request)
      .then(({ data }) => {
        const { token } = data;
        localStorage.setItem('token', token)

        const authToken = localStorage.getItem('token');
        this.setState({ authToken });
      })
      .catch(err => console.log(err));
  }

  // componentDidMount
  componentDidMount() {
    const authToken = localStorage.getItem('token');

    if (authToken)
      this.setState({ authToken });
    else
      this.hideLoginForm();
  }
  
  // render
  render() {
    return (
      <React.Fragment>
        <NavBar
          loggedIn      = { this.state.loggedIn }
          showLoginForm = { this.showLoginForm }
        />

        <h1>Welcome to Calorie Count</h1>
        <p>The single easiest solution for well... counting calories!</p>

        {
          this.state.authToken
          ?
            <h1>RETURN NUTRITION</h1>
          :
            this.state.loggedIn
            ?
              <LoggedInForm submitLoginForm={ this.submitLoginForm } />
            :
              <LoggedOutForm />
        }
      </React.Fragment>
    );
  }
}

export default App;
