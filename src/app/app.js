import React, { Component } from 'react';
import './app.scss';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button class='btn btn-sm btn-info'>Click Me</Button>
      </div>
    );
  }
}

export default App;
