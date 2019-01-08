import React, { Component } from 'react';
import authRequests from '../helpers/data/authRequests';

class auth extends Component {
  authenticateUser = (event) => {
    event.preventDefault();
    authRequests.authenticate()
      .then((data) => {
        const user = data.user.uid;
        this.props.isAuthenticated(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <button className='btn btn-info' onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default auth;
