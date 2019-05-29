

import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "Videos\\portfolioMetro.mp4"
    }
    //this.state = this.props;
  }

  render() {
    return (
      <>
        <div className="landingVideoContainer">
          {this.props.selectedProjectIndex !== null ? (
            <video
              ref="vidRef"
              className="landingVideo"
              autoPlay
              muted
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
                muted
                loop
                src={this.state.video}
                type="video/mp4"
              >
                Your browser does not support HTML5 video.
            </video>
            )}
        </div>
        <div className="overlay" />
      </>
    );
  }
}

export default Video;