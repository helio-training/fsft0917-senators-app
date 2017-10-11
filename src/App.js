import React, { Component } from 'react';
import './App.css';

import Senators from './components/Senators';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Senators />
      </div>
    );
  }
}

export default App;
