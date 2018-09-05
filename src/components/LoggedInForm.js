import React, { Component } from 'react';

import Form from './misc/Form/Form';

class LoggedInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return (
      <React.Fragment>
        <h2>Log In Form</h2>
        <Form handleSubmit={ this.props.submitLoginForm } />
      </React.Fragment>
    );
  }
}
 
export default LoggedInForm;