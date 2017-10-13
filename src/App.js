import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Senators from './components/Senators';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Senators />
        </div>
      </MuiThemeProvider>  
    );
  }
}

export default App;
