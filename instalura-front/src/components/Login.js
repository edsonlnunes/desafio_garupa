import React, { Component } from 'react';

import '../css/login.css';

export default class Login extends Component {


  constructor(props) {
    super(props);

    const params = new URLSearchParams(this.props.location.search);
    this.state = { msg: params.get('msg') };
  }

  sendForm(event) {
    event.preventDefault();

    fetch(
      'http://localhost:3000/api/login',
      {
        method: 'POST',
        body: JSON.stringify({ user: this.userLogin.value, password: this.userPassowrd.value }),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Não foi possível fazer o login');
      }
    }).then(data => JSON.parse(data))
      .then(data => {
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('userlogin', data.user.user);
        this.props.history.push('/timeline');
      }).catch(error => {
        this.setState({ msg: error.message });
      });
  }

  render() {
    return (
      <div className="login-box">
        <h1 className="header-logo">Instalura</h1>
        <span>{this.state.msg}</span>
        <form onSubmit={this.sendForm.bind(this)}>
          <input type="text" placeholder="username" ref={elementLogin => this.userLogin = elementLogin} />
          <input type="password" placeholder="password" ref={elementPassword => this.userPassowrd = elementPassword} />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}