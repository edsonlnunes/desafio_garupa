import React, { Component } from 'react';

import '../css/main.css';
import logo from '../images/main-logo-white.png';
import MainApi from '../api/MainApi';

class Main extends Component {
  constructor() {
    super();
    this.state = { likes: 0, deslikes: 0 };
  }

  componentWillMount() {
    this.props.store.subscribe(() => this.setState({ likes: this.props.store.getState().likes.length, deslikes: this.props.store.getState().deslikes.length }));
  }

  componentDidMount() {
    this.props.store.dispatch(MainApi.loadDataInitial());
  }

  like = () => this.props.store.dispatch(MainApi.like());
  deslike = () => this.props.store.dispatch(MainApi.deslike());

  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="container container--custom">
          <div className="text-center img-logo">
            <img src={logo} alt="logo garupa" width="100" height="100" />
          </div>
          <div className="content">
            <div className="content--butons">
              <button type="button" className="btn btn-outline-primary btn-custom" onClick={this.like}>Curtir</button>
              <button type="button" className="btn btn-outline-danger btn-custom" onClick={this.deslike}>Não curtir</button>
            </div>
            <div className="content--information">
              <h4>Total curtidas: {this.state.likes}</h4>
              <h4>Total não curtidas: {this.state.deslikes}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;