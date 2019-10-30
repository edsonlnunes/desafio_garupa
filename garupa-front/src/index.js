import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Login from './components/Login';


// lógica para ver se usuário ta logado
const isAuthenticated = () => localStorage.getItem('auth-token') !== null;

// rotas privadas (que somente usuários logados podem acessar)
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

// Lógica para ver se usuário está logado, caso estiver é direcionado para tela inicial
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