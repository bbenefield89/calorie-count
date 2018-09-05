import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // handleInputVals
  handleInputVals = e => {
    const { name, value } = e.target;
    
    this.setState({ [ name ]: value });
  }

  // render
  render() {
    return (
      <React.Fragment>
        <form onSubmit={ e => e.preventDefault() }>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={ this.handleInputVals }
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={ this.handleInputVals }
          />

          <input
            type="submit"
            value="Submit"
            onClick={ () => this.props.handleSubmit(this.state) }
          />
        </form>
      </React.Fragment>
    );
  }
}
 
export default Form;