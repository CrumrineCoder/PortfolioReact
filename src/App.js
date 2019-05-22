import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';

import Landing from "./Landing.js";
import Boxes from "./Boxes.js";
import Project from "./Project.js";
import ProjectPreview from "./ProjectPreview.js";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [{
        logo: "Images/raptureLogo.png ",
        color: "#218F7D",
        title: "Rapture Fashion",
        shortDesc: "React and Shopify Boutique Fashion site",
        backend: "JavaScript, Shopify Storefront API, Firebase",
        frontend: "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4",
        productPaper: "This website was a study on UX research, UI design, marketing, and how to integrate Shopify with React all so I can build small business websites.",
        codeLink: "https://github.com/CrumrineCoder/RaptureFashion/",
        websiteLink: "https://rapture-fashion.firebaseapp.com/#/",
        caseStudyLink: "https://nicolascrumrine.com/#/posts/-LecEwsYvjJNcwIJJjao",
        video: "Videos/raptureFashion.mp4",
        class: "Rapture"
      },{
        logo: "Images/votingAppLogo.png ",
        color: "#A61C88",
        title: "Polling",
        shortDesc: "This React.js & Redux fullstack website lets users create, view, and vote on polls.",
        backend: "JavaScript, Node.js, Express.js, Firebase, MongoDB, Mongoose, jwt, Passport",
        frontend: "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4, Responsive",
        productPaper: "This website is an updated version of one I made last year. I taught myself Redux and react-router while developing my React.js fullstack skills. I refactored the app to learn Firebase, here is the code for the Node version of this app: https://github.com/CrumrineCoder/PollingReactNodeBase ",
        codeLink: "https://github.com/CrumrineCoder/Polling",
        websiteLink: "https://polling-269dc.firebaseapp.com/#/",
        prevWebsiteLink: "https://joinordie.glitch.me/",
        caseStudyLink: "https://nicolascrumrine.herokuapp.com/#/posts/5c253ffad802b53cdcc17e00",
        video: "Videos/pollingReactEdited.mp4",
        class: "Poll"
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
        video: "Videos\\pjcEdited.mp4",
        class: "Penny"
      }, {
        logo: " Images/npcLookUpLogo.png ",
        color: "#EF281A",
        picture: " Images/npcLookUpv2.png ",
        title: "NPC Lookup",
        shortDesc: "This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",
        backend: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",
        frontend: "HTML5, CSS3, Responsive, Angular",
        productPaper: "I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",
        codeLink: "https://github.com/CrumrineCoder/NPC-LOOK-UP",
        websiteLink: "https://npclookup.glitch.me/",
        video: "Videos\\npcEdited.mp4",
        class: "NPC"
      }, {
        logo: " Images/twitchViewerLogo.png ",
        color: "#6441A4",
        picture: " Images/twitchViewer.png ",
        title: "Twitch Viewer",
        shortDesc: "This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",
        backend: "JavaScript, jQuery, Twitch.tv API",
        frontend: "HTML5, CSS3, Responsive, Angular",
        productPaper: "I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",
        codeLink: "https://github.com/CrumrineCoder/Twitch-Viewer-Redone",
        websiteLink: "https://crumrinecoder.github.io/Twitch-Viewer-Redone/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather",
        video: "Videos\\twitchEdited.mp4",
        class: "Twitch"
      }, {
        logo: "Images/tmbgLogo.png ",
        color: "#171E26",
        title: "TMBG",
        shortDesc: "This is a landing page redesign for the They Might Be Giants website.",
        backend: "JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",
        frontend: "HTML5, CSS3, Responsive, Angular, Sass",
        productPaper: "I built this website as a Capstone project for everything I've learnt in the past year. The website allows users to anonymously comment on the newest album and to find the nearest tour. The website is also a practice in business marketing and design. Links and most buttons are placeholders.",
        codeLink: "https://github.com/CrumrineCoder/TheyMightBeGiantsv3",
        websiteLink: "https://tmbg.herokuapp.com/",
        video: "Videos/tmbgEdited.mp4",
        class: "TMBG"
      },{
        logo: " Images/connectFourAppLogo.png ",
        color: "#FF7F11",
        picture: " Images/connectFourApp.png ",
        title: "Connect Four",
        shortDesc: "This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",
        backend: "JavaScript, minimax Algorithms",
        frontend: "HTML5, CSS3",
        productPaper: "This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",
        codeLink: "https://github.com/CrumrineCoder/connect4-version2",
        websiteLink: "https://crumrinecoder.github.io/connect4-version2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",
        video: "Videos\\c4Edited.mp4",
        class: "C4"
      }, {
        logo: " Images/weatherApp%20logo.png ",
        color: "#048027",
        picture: " Images/weatherApp.png ",
        title: "Weather",
        shortDesc: "This is a web app that shows the weather based on location.",
        backend: "JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",
        frontend: "HTML5, CSS3, Responsive, Angular, Sass",
        productPaper: "I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",
        codeLink: "https://github.com/CrumrineCoder/Weather-App",
        websiteLink: "https://crumrinecoder.github.io/Weather-App/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather",
        video: "Videos\\weatherEdited.mp4",
        class: "Weather"
      }, {
        logo: " Images/quotesAppLogo.png ",
        color: "#008080",
        picture: " Images/quotesApp.png ",
        title: "Quotes",
        shortDesc: "This is a website that uses Angular to display quotes from various sources.",
        backend: "JavaScript, jQuery",
        frontend: "HTML5, CSS3, Responsive, Angular",
        productPaper: "I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",
        codeLink: "https://github.com/CrumrineCoder/Quote-Generator-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Quote-Generator-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-random-quote-machine",
        video: "Videos\\quoteEdited.mp4",
        class: "Quote"
      }, {
        logo: " Images/wikipediaViewerLogo.png ",
        color: "#007CB6",
        picture: " Images/wikipediaViewer.png ",
        title: "Wiki Viewer",
        shortDesc: "This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",
        backend: "JavaScript, jQuery, Wikipedia API",
        frontend: "HTML5, CSS3, React.js, Responsive",
        productPaper: "I taught myself about using APIs with React and more about state management with this project.",
        codeLink: "https://github.com/CrumrineCoder/wikipediaviewerreact",
        websiteLink: "http://dark-yarn.surge.sh/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",
        video: "Videos\\wiki.mp4",
        class: "Wiki"
      }, {
        logo: " Images/calculatorAppLogo.png ",
        color: "#865DAF",
        picture: " Images/calculatorApp.png ",
        title: "Calculator",
        shortDesc: "This is a web app that resembles a basic calculator.",
        backend: "JavaScript",
        frontend: "HTML5, CSS3, Responsive",
        productPaper: "I practiced JavaScript algorithm scripting with this project.",
        codeLink: "https://github.com/CrumrineCoder/Calculator",
        websiteLink: " https://crumrinecoder.github.io/Calculator/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-javascript-calculator",
        video: "Videos\\calcEdited.mp4",
        class: "Calc"
      }, {
        logo: " Images/pomodoroAppLogo.png",
        color: "#E90000",
        picture: " Images/pomodoroApp.png ",
        title: "Pomodoro",
        shortDesc: "This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",
        backend: "JavaScript, jQuery",
        frontend: "HTML5, CSS3, Responsive",
        productPaper: "I practiced Async JavaScript design and minimalistic front end design.",
        codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",
        video: "Videos\\pomodoroEdited.mp4",
        class: "Clock"
      }],
      index: 0,
      mouseIndex: 0
    };
    this.userClicksAboutMe = this.userClicksAboutMe.bind(this);
    this.userClicksGithub = this.userClicksGithub.bind(this);
    this.userClicksLinkedIn = this.userClicksLinkedIn.bind(this);
    this.userClicksEmail = this.userClicksEmail.bind(this);
  }

  initializeReactGA() {
    ReactGA.initialize('UA-114290573-1');
    ReactGA.pageview('/homepage');
  }

  handleProjectChange = (idx) => {
    this.setState({ index: idx });
  }

  handleCarouselProject = (incr) => {
    if (this.state.index == (this.state.projects.length - 1) && incr == 1) {
      this.setState({ index: 0 });
    } else if (this.state.index == 0 && incr == -1) {
      this.setState({ index: (this.state.projects.length - 1) });
    } else {
      this.setState({ index: (this.state.index + incr) });
    }
  }

  handleProjectPreview = (mouseIdx) => {
    this.setState({ mouseIndex: mouseIdx });
  }

  userClicksAboutMe(){
    ReactGA.event({
      category: 'Nav',
      action: 'About Me'
    });
  }

  userClicksGithub(){
    ReactGA.event({
      category: 'Nav',
      action: 'Github'
    });
  }

  userClicksLinkedIn(){
    ReactGA.event({
      category: 'Nav',
      action: 'LinkedIn'
    });
  }

  userClicksEmail(){
    ReactGA.event({
      category: 'Nav',
      action: 'Email'
    });
  }

  render() {
    return (
      <div className="App">

      
        <Landing></Landing>
        <Boxes handleProjectChange={this.handleProjectChange} handleProjectPreview={this.handleProjectPreview} projects={this.state.projects} currentProjectIndex={this.state.index} />
        <ProjectPreview  {...this.state.projects[this.state.mouseIndex]} />
        <Project handleCarouselProject={this.handleCarouselProject} {...this.state.projects[this.state.index]} />
      </div>
    );
  }
}
// <ProjectPreview  {...this.state.projects[this.state.mouseIndex]} />
export default App;

/*
  <nav id="nav" style={{ borderColor: this.state.projects[this.state.index].color }}>
          <ul>
            <li id="nameNavContainer">
              <img id="navProfileImage" src="Images/profile.jpg"></img>
              <div id="nameNavContainerText">
                <p id="nic"> Nicolas Crumrine </p>
                <p id="nicJob">Front End Web Developer based in NYC
                  <a id="aboutMeButton" href="https://nicolascrumrine.com/#/about" rel="noopener noreferrer" target="_blank" onClick={this.userClicksAboutMe}>About Me
                  </a>
                </p>
              </div>
            </li>
            <li>
              <a href="https://github.com/CrumrineCoder" id="github" title="Github" rel="noopener noreferrer" target="_blank" onClick={this.userClicksGithub}>
                <i className="fab fa-github navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/" title="link" rel="noopener noreferrer" target="_blank" onClick={this.userClicksLinkedIn}>
                <i className="fab fa-linkedin-in navIcon" border="0"></i>
              </a>
            </li>
            <li>
              <a href="mailto:crumrinecoding@gmail.com" title="Email" rel="noopener noreferrer" target="_blank" onClick={this.userClicksEmail}>
                <i className="fas fa-envelope navIcon" border="0"></i>
              </a>
            </li>
          </ul>
        </nav>
        */