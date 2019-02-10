import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Project extends Component {

    constructor(props) {
        super(props);
        //this.state = this.props;
        this.state = { currentProject: this.props, videoIsPlaying: true }
        this.toggleOverlay = this.toggleOverlay.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.currentProject.title !== nextProps.title) {
          this.setState({ currentProject: nextProps, videoIsPlaying: true });
        } else{
            this.setState({ currentProject: nextProps});
        }
    }

    toggleOverlay() {
        console.log("test1");
    }

    pause() {
        console.log("test2");
        this.refs.vidRef.pause();
        this.setState({ videoIsPlaying: false });
    }

    play() {
        console.log("test3");
        this.refs.vidRef.play();
        this.setState({ videoIsPlaying: true });
    }

    render() {
        return (
            <>
                <div id="overlay" className="hiddenOverlay">
                    <button id="toggleOverlayButton" onClick={this.toggleOverlay}>
                        <i id="toggleOverlayButtonIcon" className="fas fa-chevron-down"></i>
                    </button>
                    <div id="overlayText" className="shownOverlay">
                        <h4><i>Project Hover Preview</i></h4>
                        <h1 id="overlayTitle"> {this.state.currentProject.title}  </h1>
                        <ul>
                            <div id="overlayFrontEnd">
                                <li className="frontend">  {this.state.currentProject.frontTechnologies} </li>
                            </div>
                            <div id="overlayBackEnd">
                                <li className="backend">  {this.state.currentProject.backTechnologies} </li>
                            </div>
                        </ul>
                        <h3>Click on the Project Icon to learn more!</h3>
                    </div>
                </div>

                <div id="index">

                    <div id="projects">
                        <div id="video-jumbotron">
                            <video  ref="vidRef" id="projectPicture" autoPlay muted loop src={this.state.currentProject.video}  type="video/mp4">
                                Your browser does not support HTML5 video.
              </video>
                        </div>
                        <div id="projectInfoText">
                            <div id="content">
                                <div id="video-controls">
                                    <i style={{display: this.state.videoIsPlaying ? 'block' : 'none' }} onClick={this.pause} className="fas fa-pause-circle video-control-button" id="video-pause-button"></i>
                                    <i style={{display: this.state.videoIsPlaying ? 'none' : 'block' }} onClick={this.play} className="fas fa-play-circle video-control-button" id="video-play-button"></i>
                                </div>
                                <div id="topLeftContent">
                                    <h1 id="projectTitle">  {this.state.currentProject.title} </h1>
                                    <div id="projectAdditionalInformation">
                                        <ul>
                                            <div id="projectFrontEnd">
                                                <li className="frontend">  {this.state.currentProject.frontTechnologies} </li>
                                            </div>
                                            <div id="projectBackEnd">
                                                <li className="backend">  {this.state.currentProject.backTechnologies} </li>
                                            </div>
                                        </ul>
                                        <p>  {this.state.currentProject.projectDescription}</p>
                                        <p> {this.state.currentProject.productPaper} </p>
                                        <a ng-if="projectInfo.prevWebsiteLink != undefined" className="externalLinks" rel="noopener noreferrer" target="_blank">
                                            <div id="prev-code-link">
                                                <i className="fas fa-external-link-alt fontIcon" rgb="(0,0,0)"> </i>See Previous Version of Website
                           </div>
                                        </a>
                                    </div>
                                    <button id="toggleButton" onClick={this.toggleInfo} value="Show More">Toggle Info</button>
                                </div>
                                <ul id="projectLinks">
                                    <a className="externalLinks" rel="noopener noreferrer" target="_blank">
                                        <li id="code-link">
                                            <i className="fas fa-code fontIcon"></i>See Code
                        </li>
                                    </a>
                                    <a className="externalLinks" rel="noopener noreferrer" target="_blank">
                                        <li id="website-link">
                                            <i className="fas fa-external-link-alt fontIcon"></i>Visit Website
                        </li>
                                    </a>
                                    <a ng-if="projectInfo.caseStudyLink != undefined" className="externalLinks" rel="noopener noreferrer" target="_blank">
                                        <li id="case-link">
                                            <i className="fas fa-book-open fontIcon"></i>Read Case Study
                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <button ng-click="carouselProject(-1)" className="sliderBtn" id="backBtn">
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <button ng-click="carouselProject(1)" className="sliderBtn" id="nextBtn">
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </div>
                    <div id="contactInfo">
                        <i className="fa fa-envelope-o fa-2x"> </i>
                        <h1>Let's start</h1>
                        <h3> a new project together</h3>
                        <a id="emailButton" href="mailto:crumrinecoding@gmail.com">Email Me</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Project;
