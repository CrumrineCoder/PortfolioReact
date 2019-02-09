import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
		super(props);
    this.state = {
      logo: "Images/votingAppLogo.png",
      color: "#A61C88",
      title: "Polling",
      shortDesc: "This React.js & Redux fullstack website lets users create, view, and vote on polls.",
      backend: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, jwt, Passport",
      frontend: "React.js, Redux.js, rxJs, react-router, HTML5, CSS3, Bootstrap 4",
      productPaper: "This website is an updated version of one I made last year. I taught myself Redux and react-router while developing my React.js fullstack skills. I am still adding new features.",
      codeLink: "https://github.com/CrumrineCoder/Polling",
      websiteLink: "https://crumrinepolling.herokuapp.com/#/",
      prevWebsiteLink: "https://joinordie.glitch.me/",
      caseStudyLink: "https://nicolascrumrine.herokuapp.com/#/posts/5c253ffad802b53cdcc17e00", 
      video: "./Videos/pollingReactEdited.mp4"
    }
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }
  
  toggleOverlay(){
    console.log("test");
  }

  pause(){
    console.log("test");
  }

  play(){
    console.log("test");
  }

  render() {
    return (
      <div className="App">

        <nav id="nav">
          <ul>
            <li id="nameNavContainer">
              <p id="nic"> Nicolas Crumrine </p>
              <p id="nicJob">Front End Web Developer based in NYC
                  <a id="aboutMeButton" href="https://nicolascrumrine.herokuapp.com/#/about" target="_blank">About
                Me
                  </a>
              </p>
            </li>
            <li>
              <a href="https://github.com/CrumrineCoder" id="github" title="Github" target="_blank">
                <i className="fab fa-github navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/" title="link" target="_blank">
                <i className="fab fa-linkedin-in navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="mailto:crumrinecoding@gmail.com" title="Email" target="_blank">
                <i className="fas fa-envelope navIcon" border="0"></i>
              </a>
            </li>
          </ul>
        </nav>

      
        <div id="overlay" className="hiddenOverlay">
          <button id="toggleOverlayButton" onClick={this.toggleOverlay}>
            <i id="toggleOverlayButtonIcon" className="fas fa-chevron-down"></i>
          </button>
          <div id="overlayText" className="shownOverlay">
            <h4><i>Project Hover Preview</i></h4>
            <h1 id="overlayTitle"> {this.state.title}  </h1>
            <ul>
              <div id="overlayFrontEnd">
                <li className="frontend">  {this.state.frontTechnologies} </li>
              </div>
              <div id="overlayBackEnd">
                <li className="backend">  {this.state.backTechnologies} </li>
              </div>
            </ul>
            <h3>Click on the Project Icon to learn more!</h3>
          </div>
        </div>

        <div id="index">

          <div id="projectSelectBoxes">
            <button type="image" className="projectSelectButton" id="" ng-click="changeProject(project.id)"
              ng-mouseover="changePreview(project.id)" ng-style="{'background-color': project.color}" ng-repeat="project in buttons">
              <img ng-src="" className="projectSelectImage" ng-style="{'background-color': project.color}" />
              <p className="logoText">  {this.state.title} </p>
            </button>
          </div>

          <div id="projects">
            <div id="video-jumbotron">
              <video id="projectPicture" autoPlay muted loop src="">
                <source src="../public/Videos/pollingReactEdited.mp4" type="video/mp4" /> Your browser does not support HTML5 video.
              </video>
              <img src="../public/Images/calculatorApp.png"></img>
            </div>
            <div id="projectInfoText">
              <div id="content">
                <div id="video-controls">
                  <i onClick={this.pause} className="fas fa-pause-circle video-control-button" id="video-pause-button"></i>
                  <i onClick={this.play} className="fas fa-play-circle video-control-button" id="video-play-button"></i>
                </div>
                <div id="topLeftContent">
                  <h1 id="projectTitle">  {this.state.title} </h1>
                  <div id="projectAdditionalInformation">
                    <ul>
                      <div id="projectFrontEnd">
                        <li className="frontend">  {this.state.frontTechnologies} </li>
                      </div>
                      <div id="projectBackEnd">
                        <li className="backend">  {this.state.backTechnologies} </li>
                      </div>
                    </ul>
                    <p>  {this.state.projectDescription}</p>
                    <p> {this.state.productPaper} </p>
                    <a ng-if="projectInfo.prevWebsiteLink != undefined" className="externalLinks" href="" target="_blank">
                      <div id="prev-code-link">
                        <i className="fas fa-external-link-alt fontIcon" rgb="(0,0,0)"> </i>See Previous Version of Website
                           </div>
                    </a>
                  </div>
                  <button id="toggleButton" onClick="toggleInfo();" value="Show More">Toggle Info</button>
                </div>
                <ul id="projectLinks">
                  <a href="" className="externalLinks" target="_blank">
                    <li id="code-link">
                      <i className="fas fa-code fontIcon"></i>See Code
                        </li>
                  </a>
                  <a href="" className="externalLinks" target="_blank">
                    <li id="website-link">
                      <i className="fas fa-external-link-alt fontIcon"></i>Visit Website
                        </li>
                  </a>
                  <a ng-if="projectInfo.caseStudyLink != undefined" href="" class="externalLinks" target="_blank">
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
      </div>
    );
  }
}

export default App;
