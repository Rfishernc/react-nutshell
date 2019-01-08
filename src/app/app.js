import React, { Component } from 'react';
import Auth from '../auth/auth';
import connection from '../helpers/data/connection';
import Navbar from '../navbar/navbar';
import authRequests from '../helpers/data/authRequests';
import './app.scss';

class App extends Component {
  state = {
    authenticated: false,
    user: '',
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = (user) => {
    this.setState({ authenticated: true, user });
  }

  render() {
    const logoutClicked = () => {
      authRequests.logoutUser();
      this.setState({
        authenticated: false, user: '',
      });
    };
    if (!this.state.authenticated) {
      return (
        <div className="App">
          <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}></Navbar>
          <div className='container-fluid main'>
            <Auth isAuthenticated={this.isAuthenticated}>
            </Auth>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <Navbar isAuthenticated={this.state.authenticated} logoutClicked={logoutClicked}></Navbar>
        <div className='container-fluid main'>
          <h3 className='authedHeader'>You are authed</h3>
        </div>
      </div>
    );
  }
}

export default App;
