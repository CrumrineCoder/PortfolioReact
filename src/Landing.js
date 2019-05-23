import React, { Component } from 'react';

class Landing extends Component {

    constructor(props) {
        super(props);
        //this.state = this.props;
        this.state = {
            video: "Videos\\We are Paid to Work Here.webm"
        }
    }

    render() {
        return (
            <div className="landingParallax">
                <div className="landingTopContainer">
                    <div className="landingNav">
                        <div className="landingNavItem">About</div>
                        <div className="landingNavItem"><i className="fab fa-github"></i></div>
                        <div className="landingNavItem"><i className="fab fa-linkedin-in"></i></div>
                        <div className="landingNavItem"><i className="fas fa-envelope"></i></div>
                    </div>
                    <div className="landingVideoContainer">
                        <video ref="vidRef" className="landingVideo" autoPlay muted loop src={this.state.video} type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div className="landingTitleBody">
                        <div className="landingTitle">Nicolas Crumrine</div>
                        <div className="landingSubTitle">Front End Web Developer</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
