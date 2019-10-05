

import React, { Component } from "react";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "Videos\\Portfoliometro.mp4"
    }
    //this.state = this.props;
  }// key={this.props.selectedProjectIndex}

  render() {
    let video = (<div key={this.props.selectedProjectIndex} className="landingVideoContainer">
      {this.props.selectedProjectIndex !== null ? (
        <video
          ref="vidRef"
          className="landingVideo"
          autoPlay
          muted={true}
          loop
          src={
            this.props.projects[this.props.selectedProjectIndex].video ||
            this.state.video
          }
          type="video/mp4"
        >
          Your browser does not support HTML5 video.
      </video>
      ) : (
          <video
            ref="vidRef"
            className="landingVideo"
            autoPlay
            muted={true}
            loop
            src={this.state.video}
            type="video/mp4"
          >
            Your browser does not support HTML5 video.
      </video>
        )}
    </div>)
    /*
      <ReactCSSTransitionGroup
          transitionName="video"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {video}
        </ReactCSSTransitionGroup>
        */
    return (
      <>
        {video}
        <div className="overlay" />
      </>
    );
  }
}

export default Video;