import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="nav">
          <ul>
            <li id="nameNavContainer">
              <p id="nic"> Nicolas Crumrine </p>
              <p id="nicJob">Front End Web Developer based in NYC
                  <a id="aboutMeButton" href="https://nicolascrumrine.herokuapp.com/#/about" target="_blank" onclick="ga('send', 'event', 'Nav', 'Click', 'AboutMeBlog');">About
                Me
                  </a>
              </p>
            </li>
            <li>
              <a href="https://github.com/CrumrineCoder" id="github" title="Github" target="_blank" onclick="ga('send', 'event', 'Nav', 'Click', 'Github');">
                <i class="fab fa-github navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/" title="link" target="_blank" onclick="ga('send', 'event', 'Nav', 'Click', 'LinkedIn');">
                <i class="fab fa-linkedin-in navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="mailto:crumrinecoding@gmail.com" title="Email" target="_blank" onclick="ga('send', 'event', 'Nav', 'Click', 'Email');">
                <i class="fas fa-envelope navIcon" border="0"></i>
              </a>
            </li>
          </ul>
        </nav>
        <div id="overlay" class="hiddenOverlay">
          <button id="toggleOverlayButton" onclick="toggleOverlay(); ga('send', 'event', 'Overlay', 'Click', 'Close');">
            <i id="toggleOverlayButtonIcon" class="fas fa-chevron-down"></i>
          </button>
          <div id="overlayText" class="shownOverlay">
            <h4><i>Project Hover Preview</i></h4>
            <h1 id="overlayTitle">  previewInfo.title }} </h1>
            <ul>
              <div id="overlayFrontEnd">
                <li class="frontend">  previewInfo.frontTechnologies }} </li>
              </div>
              <div id="overlayBackEnd">
                <li class="backend">  previewInfo.backTechnologies }} </li>
              </div>
            </ul>
            <h3>Click on the Project Icon to learn more!</h3>
          </div>
        </div>
        <div id="index">
          <div ng-cloak id="projectSelectBoxes">
            <button type="image" class="projectSelectButton" id="" onclick="ga('send', 'event', 'Project', 'Click','ProjectBox');" ng-click="changeProject(project.id)"
              ng-mouseover="changePreview(project.id)" ng-style="{'background-color': project.color}" ng-repeat="project in buttons">
              <img ng-src="" class="projectSelectImage" ng-style="{'background-color': project.color}" />
              <p ng-cloak class="logoText">  project.title }} </p>
            </button>
          </div>
          <div id="projects">
            <div id="video-jumbotron">
              <video id="projectPicture" autoplay muted loop src="">

              </video>
            </div>
            <div ng-cloak id="projectInfoText">
              <div id="content">
                <div id="video-controls">
                  <i onclick="pause()" class="fas fa-pause-circle video-control-button" id="video-pause-button"></i>
                  <i onclick="play()" class="fas fa-play-circle video-control-button" id="video-play-button"></i>
                </div>
                <div id="topLeftContent">
                  <h1 ng-cloak id="projectTitle">projectInfo.title }} </h1>
                  <div id="projectAdditionalInformation">
                    <ul>
                      <div id="projectFrontEnd">
                        <li class="frontend">  projectInfo.frontTechnologies }} </li>
                      </div>
                      <div id="projectBackEnd">
                        <li class="backend">  projectInfo.backTechnologies }} </li>
                      </div>
                    </ul>
                    <p>  projectInfo.projectDescription }} </p>
                    <p>  projectInfo.productPaper }} </p>
                    <a ng-if="projectInfo.prevWebsiteLink != undefined" class="externalLinks" href="" target="_blank">
                      <div id="prev-code-link">
                        <i class="fas fa-external-link-alt fontIcon" rgb="(0,0,0)"> </i>See Previous Version of Website
                           </div>
                    </a>
                  </div>
                  <button id="toggleButton" onclick="toggleInfo(); ga('send', 'event', 'Project', 'Click', 'Toggle');" value="Show More">Toggle Info</button>
                </div>
                <ul id="projectLinks">
                  <a href="" class="externalLinks" target="_blank" onclick="ga('send', 'event', 'Project', 'Click', 'SeeCode');">
                    <li id="code-link">
                      <i class="fas fa-code fontIcon"></i>See Code
                        </li>
                  </a>
                  <a href="" class="externalLinks" target="_blank" onclick="ga('send', 'event', 'Project', 'Click', 'VisitWebsite');">
                    <li id="website-link">
                      <i class="fas fa-external-link-alt fontIcon"></i>Visit Website
                        </li>
                  </a>
                  <a ng-if="projectInfo.caseStudyLink != undefined" href="" class="externalLinks" target="_blank" onclick="ga('send', 'event', 'Project', 'Click', 'CaseStudy');">
                    <li id="case-link">
                      <i class="fas fa-book-open fontIcon"></i>Read Case Study
                        </li>
                  </a>
                </ul>
              </div>
            </div>
            <button ng-click="carouselProject(-1)" class="sliderBtn" id="backBtn" onclick="ga('send', 'event', 'Project', 'Click', 'Left');">
              <i class="fa fa-chevron-left"></i>
            </button>
            <button ng-click="carouselProject(1)" class="sliderBtn" id="nextBtn" onclick="ga('send', 'event', 'Project', 'Click', 'Right');">
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
          <div id="contactInfo">
            <i class="fa fa-envelope-o fa-2x"> </i>
            <h1>Let's start</h1>
            <h3> a new project together</h3>
            <a id="emailButton" href="mailto:crumrinecoding@gmail.com" onclick="ga('send', 'event', 'Project', 'Click', 'Email');">Email Me</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
