import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <span>CalCo</span>
        <div>
          <ul>
            {
              this.props.loggedIn
              ?
                <li>
                  <a href="#logout">Log Out</a>
                </li>
              :
                <React.Fragment>
                  <li onClick={ this.props.showLoginForm }>Log In</li>
                  <li><a href="#signup">Sign Up</a></li>
                </React.Fragment>
            }
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;