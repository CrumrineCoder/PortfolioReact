import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';

class Project extends Component {

    constructor(props) {
        super(props);
        //this.state = this.props;
        this.state = {
            currentProject: this.props,
            videoIsPlaying: true,
            showAdditionalInformation: false,
            hiddenOverlay: true
        }
        this.toggleInfoOverlay = this.toggleInfoOverlay.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
        this.shadeHexColor = this.shadeHexColor.bind(this);
        this.userClicksCode = this.userClicksCode.bind(this);
        this.userClicksVisit = this.userClicksVisit.bind(this);
        this.userClicksCaseStudy = this.userClicksCaseStudy.bind(this);
        this.userClicksPrevious = this.userClicksPrevious.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.currentProject.title !== nextProps.title) {
            this.setState({ currentProject: nextProps, videoIsPlaying: true });
        } else {
            this.setState({ currentProject: nextProps });
        }
    }

    carouselProject(incr) {
        this.props.handleCarouselProject(incr);
        if (incr == 1) {
            ReactGA.event({
                category: 'Project',
                action: 'CarouselRight'
            });
        } else {
            ReactGA.event({
                category: 'Project',
                action: 'CarouselLeft'
            });
        }
    }

    toggleInfoOverlay() {
        this.setState({ showAdditionalInformation: !this.state.showAdditionalInformation })
        ReactGA.event({
            category: 'Project',
            action: 'Toggle Info'
        });
    }

    pause() {
        this.refs.vidRef.pause();
        this.setState({ videoIsPlaying: false });
        ReactGA.event({
            category: 'Project',
            action: 'Pause'
        });
    }

    play() {
        this.refs.vidRef.play();
        this.setState({ videoIsPlaying: true });
        ReactGA.event({
            category: 'Project',
            action: 'Play'
        });
    }

    shadeHexColor(color, percent) {
        var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    }

    userClicksCode() {
        ReactGA.event({
            category: 'Project',
            action: 'Code ' + this.state.currentProject.title
        });
    }

    userClicksVisit() {
        ReactGA.event({
            category: 'Project',
            action: 'Visit ' + this.state.currentProject.title
        });
    }

    userClicksCaseStudy() {
        ReactGA.event({
            category: 'Project',
            action: 'CaseStudy ' + this.state.currentProject.title
        });
    }

    userClicksPrevious(){
        ReactGA.event({
            category: 'Project',
            action: 'Previous ' + this.state.currentProject.title
        });
    }

    userClicksEmailMe(){
        ReactGA.event({
            category: 'Project',
            action: 'Email'
        });
    }

    render() {
        return (
            <>
                <div id="index">
                    <div id="projects">
                        <div id="video-jumbotron">
                            <video ref="vidRef" id="projectPicture" autoPlay muted loop src={this.state.currentProject.video} type="video/mp4">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div id="projectInfoText">
                            <div id="content">
                                <div id="video-controls">
                                    <i style={{ display: this.state.videoIsPlaying ? 'block' : 'none' }} onClick={this.pause} className="fas fa-pause-circle video-control-button" id="video-pause-button"></i>
                                    <i style={{ display: this.state.videoIsPlaying ? 'none' : 'block' }} onClick={this.play} className="fas fa-play-circle video-control-button" id="video-play-button"></i>
                                </div>
                                <div id="topLeftContent">
                                    <h1 id="projectTitle"> {this.state.currentProject.title} </h1>
                                    <button id="toggleButton" style={{ background: this.state.currentProject.color }} onClick={this.toggleInfoOverlay} className={this.state.currentProject.class} value="Show More">Toggle Info</button>
                                    <div id="projectAdditionalInformation" style={{ display: this.state.showAdditionalInformation ? 'block' : 'none' }}>
                                        <ul>
                                            <div id="projectFrontEnd">
                                                <li className="frontend">  {this.state.currentProject.frontend} </li>
                                            </div>
                                            <div id="projectBackEnd">
                                                <li className="backend">  {this.state.currentProject.backend} </li>
                                            </div>
                                        </ul>
                                        <p>  {this.state.currentProject.projectDescription}</p>
                                        <p> {this.state.currentProject.productPaper} </p>
                                        <a  onClick={this.userClicksPrevious}  href={this.state.currentProject.prevWebsiteLink} style={{ display: this.state.currentProject.prevWebsiteLink != undefined ? 'block' : 'none' }} className="externalLinks" rel="noopener noreferrer" target="_blank">
                                            <div id="prev-code-link">
                                                <i className="fas fa-external-link-alt fontIcon" rgb="(0,0,0)"> </i>See Previous Version of Website
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                <ul id="projectLinks">
                                    <a onClick={this.userClicksCode}  href={this.state.currentProject.codeLink} className="externalLinks" rel="noopener noreferrer" target="_blank">
                                        <li className={this.state.currentProject.class} style={{ background: this.state.currentProject.color }} id="code-link">
                                            <i className="fas fa-code fontIcon"></i>See Code
                                         </li>
                                    </a>
                                    <a onClick={this.userClicksVisit} href={this.state.currentProject.websiteLink} className="externalLinks" rel="noopener noreferrer" target="_blank">
                                        <li className={this.state.currentProject.class} style={{ background: this.state.currentProject.color }} id="website-link">
                                            <i className="fas fa-external-link-alt fontIcon"></i>Visit Website
                                       </li>
                                    </a>
                                    <a onClick={this.userClicksCaseStudy} href={this.state.currentProject.caseStudyLink} style={{ display: this.state.currentProject.caseStudyLink != undefined ? 'block' : 'none' }} className="externalLinks" rel="noopener noreferrer" target="_blank">
                                        <li className={this.state.currentProject.class} style={{ background: this.state.currentProject.color }} id="case-link">
                                            <i className="fas fa-book-open fontIcon"></i>Read Case Study
                                       </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <button onClick={() => this.carouselProject(-1)} className="sliderBtn" id="backBtn">
                            <i className="fa fa-chevron-left"></i>
                        </button>
                        <button onClick={() => this.carouselProject(1)} className="sliderBtn" id="nextBtn">
                            <i className="fa fa-chevron-right"></i>
                        </button>
                    </div>
                    <div id="contactInfo" style={{ background: this.state.currentProject.color }}>
                        <i className="fa fa-envelope-o fa-2x"> </i>
                        <h1>Let's start</h1>
                        <h3> a new project together</h3>
                        <a onClick={this.userClicksEmailMe} id="emailButton" style={{ background: this.shadeHexColor(this.state.currentProject.color, -.5) }} href="mailto:crumrinecoding@gmail.com">Email Me</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Project;
