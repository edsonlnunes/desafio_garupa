import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Main from './components/Main';
import { mainReducer } from './reducers/main';

// criação da store
const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Main store={store} />
        </div>
      </div>
    );
  }
}

export default App;
