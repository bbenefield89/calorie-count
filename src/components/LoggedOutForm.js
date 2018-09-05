import React, { Component } from 'react';

import Form from './misc/Form/Form';

class LoggedInForm extends Component {
  state = {
    username: '',
    password: ''
  }

  render() { 
    return (
      <React.Fragment>
        <h2>Logged Out Form</h2>
        <Form />
      </React.Fragment>
    );
  }
}
 
export default LoggedInForm;