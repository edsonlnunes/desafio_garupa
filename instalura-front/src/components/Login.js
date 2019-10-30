import React, { Component } from 'react';

import logo from '../images/main-logo.png';
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
        this.props.history.push('/main');
      }).catch(error => {
        this.setState({ msg: error.message });
      });
  }

  render() {
    return (
      <div className="content-login">
        <div className="background"></div>
        <section className="login">
          <div className="box-login">
            <div>
              <img src={logo} width="100" height="100" />
            </div>
            <form onSubmit={this.sendForm.bind(this)}>
              <div className="form-group">
                <label htmlFor="usuario">Usuário</label>
                <input id="usuario" type="text" className="form-control" placeholder="Digite seu usuário" ref={elementLogin => this.userLogin = elementLogin} />
              </div>
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" ref={elementPassword => this.userPassowrd = elementPassword} />
              </div>
              <button type="submit" className="btn btn-success">Entrar</button>
              <small className="error">{this.state.msg}</small>
            </form>
          </div>
        </section>
      </div>
    );
  }
}