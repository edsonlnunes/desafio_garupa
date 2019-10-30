import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.loadTimeline();
  }

  render() {
    return (
      <div className="fotos container">
        <ReactCSSTransitionGroup
          transitionName="timeline"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {
            // this.props.posts.length > 0 ? this.state.posts.map(post => <Post key={post.datepost} post={post} like={this.props.like} comment={this.props.comment} />) : <div></div>
            <h1>Hello Word</h1>
          }
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export default Main;