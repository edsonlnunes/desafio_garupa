import React, { Component } from 'react';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div data-reactroot="" className="main">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
