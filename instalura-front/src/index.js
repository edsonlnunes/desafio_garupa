import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Login from './components/Login';


const isAuthenticated = () => localStorage.getItem('auth-token') !== null;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }

  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: '/main' }} />
      ) : (
          <Component {...props} />
        )
    }

  />
);

ReactDOM.render(
  (
    <Router>
      <Switch>
        <LoginRoute exact path="/" component={Login} />
        <PrivateRoute path="/main" component={App} />
      </Switch>
    </Router>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();