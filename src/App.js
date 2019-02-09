import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from "./Project.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = [{
      logo: "Images/votingAppLogo.png ",
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
      video: "Videos/pollingReactEdited.mp4"
  },{
      logo: "Images/tmbgLogo.png ",
      color: "#171E26",
      title: "TMBG",
      shortDesc: "This is a landing page redesign for the They Might Be Giants website.",
      backend: "JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",
      frontend: "HTML5, CSS3, Responsive, Angular, Sass",
      productPaper: "I built this website as a Capstone project for everything I've learnt in the past year. The website allows users to anonymously comment on the newest album and to find the nearest tour. The website is also a practice in business marketing and design. Links and most buttons are placeholders.",
      codeLink: "https://github.com/CrumrineCoder/TheyMightBeGiantsv3",
      websiteLink: "https://tmbg.herokuapp.com/",
      video: "Videos/tmbgEdited.mp4"
  }, {
      logo: "Images/cookiesWebsiteLogo.png ",
      color: "#18788C",
      picture: " Images/cookiesWebsite.png ",
      title: "Penny's Cookies",
      shortDesc: "This is a portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",
      backend: "JavaScript, PHP, jQuery",
      frontend: "HTML5, CSS3, Responsive, Swiper, Intense Images, Mail Chimp",
      productPaper: "I taught myself about developing a marketing strategy, writing a competitive analysis, scheduling, and writing user stories with a client. I also learned about working with another designer. I taught myself PHP to develop the email forms. I also taught myself a few other minor libraries and services.",
      codeLink: "https://github.com/CrumrineCoder/PJRevised",
      websiteLink: "http://pennyjanescookies.com/",
      video: "Videos\\pjcEdited.mp4"
  }];
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  toggleOverlay() {
    console.log("test");
  }

  pause() {
    console.log("test");
  }

  play() {
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
                  <a id="aboutMeButton" href="https://nicolascrumrine.herokuapp.com/#/about" rel="noopener noreferrer" target="_blank">About
              Me
                  </a>
              </p>
            </li>
            <li>
              <a href="https://github.com/CrumrineCoder" id="github" title="Github" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/" title="link" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin-in navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="mailto:crumrinecoding@gmail.com" title="Email" rel="noopener noreferrer" target="_blank">
                <i className="fas fa-envelope navIcon" border="0"></i>
              </a>
            </li>
          </ul>
        </nav>
        <Project {...this.state[0]} />

      </div>
    );
  }
}

export default App;
