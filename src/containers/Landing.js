import React, { Component } from "react";

import Header from "../components/Header.js";
import Video from "../components/Video.js";
import ProjectInfo from "../components/ProjectInfo.js";
import ProjectBoxesContainer from "./ProjectBoxesContainer.js";

class Landing extends Component {
  constructor(props) {
    super(props);
    //this.state = this.props;
    this.state = {
      // video: "Videos\\We are Paid to Work Here.webm",
      noProjectSelected: true,
      selectedProjectIndex: null,
      projects: [
        {
          logo: "Images/raptureLogo.png ",
          color: "#218F7D",
          title: "Rapture Fashion",
          shortDesc: "React and Shopify Boutique Fashion site",
          frontend:
            "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4",
          backend: "JavaScript, Shopify Storefront API, Firebase",
          productPaper:
            "This website was a study on UX research, UI design, marketing, and how to integrate Shopify with React all so I can build small business websites.",
          codeLink: "https://github.com/CrumrineCoder/RaptureFashion/",
          websiteLink: "https://rapture-fashion.firebaseapp.com/#/",
          caseStudyLink:
            "https://nicolascrumrine.com/#/posts/-LecEwsYvjJNcwIJJjao",
          video: "Videos/rapturefashion2.mp4",
          class: "Rapture"
        },
        {
          logo: "Images/votingAppLogo.png ",
          color: "#A61C88",
          title: "Polling",
          shortDesc:
            "React.js & Redux fullstack website where users create, view, and vote on polls.",
          backend:
            "JavaScript, Node.js, Express.js, Firebase, MongoDB, Mongoose, jwt, Passport",
          frontend:
            "React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4, Responsive",
          productPaper:
            "Taught myself Redux and react-router with a backend. This version uses Firebase, Node version: https://github.com/CrumrineCoder/PollingReactNodeBase",
          codeLink: "https://github.com/CrumrineCoder/Polling",
          websiteLink: "https://polling-269dc.firebaseapp.com/#/",
          // prevWebsiteLink: "https://joinordie.glitch.me/",
          caseStudyLink:
            "https://nicolascrumrine.herokuapp.com/#/posts/5c253ffad802b53cdcc17e00",
          video: "Videos/pollingReactEdited.mp4",
          class: "Poll"
        },
        {
          logo: "Images/cookiesWebsiteLogo.png ",
          color: "#18788C",
          picture: " Images/cookiesWebsite.png ",
          title: "Penny's Cookies",
          shortDesc:
            "Portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",
          backend: "JavaScript, PHP, jQuery",
          frontend:
            "HTML5, CSS3, Responsive",
          productPaper:
            "Worked with another designer. Developed marketing strategy, wrote a competitive analysis, scheduled and wrote user stories with client.",
          codeLink: "https://github.com/CrumrineCoder/PJRevised",
          websiteLink: "http://pennyjanescookies.com/",
          video: "Videos\\pjcEdited.mp4",
          class: "Penny"
        },
        {
          logo: " Images/npcLookUpLogo.png ",
          color: "#EF281A",
          picture: " Images/npcLookUpv2.png ",
          title: "NPC Lookup",
          shortDesc:
            "This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",
          backend:
            "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",
          frontend: "HTML5, CSS3, Responsive, Angular",
          productPaper:
            "I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",
          codeLink: "https://github.com/CrumrineCoder/NPC-LOOK-UP",
          websiteLink: "https://npclookup.glitch.me/",
          video: "Videos\\npcEdited.mp4",
          class: "NPC"
        },
        {
          logo: " Images/twitchViewerLogo.png ",
          color: "#6441A4",
          picture: " Images/twitchViewer.png ",
          title: "Twitch Viewer",
          shortDesc:
            "This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",
          backend: "JavaScript, jQuery, Twitch.tv API",
          frontend: "HTML5, CSS3, Responsive, Angular",
          productPaper:
            "I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",
          codeLink: "https://github.com/CrumrineCoder/Twitch-Viewer-Redone",
          websiteLink: "https://crumrinecoder.github.io/Twitch-Viewer-Redone/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/show-the-local-weather",
          video: "Videos\\twitchEdited.mp4",
          class: "Twitch"
        },
        {
          logo: "Images/tmbgLogo.png ",
          color: "#171E26",
          title: "TMBG",
          shortDesc:
            "This is a landing page redesign for the They Might Be Giants website.",
          backend:
            "JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",
          frontend: "HTML5, CSS3, Responsive, Angular, Sass",
          productPaper:
            "The website allows users to anonymously comment on the newest album and to find the nearest tour. Also a practice in business marketing and design. Links and most buttons are placeholders.",
          codeLink: "https://github.com/CrumrineCoder/TheyMightBeGiantsv3",
          websiteLink: "https://tmbg.herokuapp.com/",
          video: "Videos/tmbgEdited.mp4",
          class: "TMBG"
        },
        {
          logo: " Images/connectFourAppLogo.png ",
          color: "#FF7F11",
          picture: " Images/connectFourApp.png ",
          title: "Connect Four",
          shortDesc:
            "This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",
          backend: "JavaScript, minimax Algorithms",
          frontend: "HTML5, CSS3",
          productPaper:
            "This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",
          codeLink: "https://github.com/CrumrineCoder/connect4-version2",
          websiteLink: "https://crumrinecoder.github.io/connect4-version2/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",
          video: "Videos\\c4Edited.mp4",
          class: "C4"
        },
        {
          logo: " Images/weatherApp%20logo.png ",
          color: "#048027",
          picture: " Images/weatherApp.png ",
          title: "Weather",
          shortDesc:
            "This is a web app that shows the weather based on location.",
          backend: "JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",
          frontend: "HTML5, CSS3, Responsive, Angular, Sass",
          productPaper:
            "I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",
          codeLink: "https://github.com/CrumrineCoder/Weather-App",
          websiteLink: "https://crumrinecoder.github.io/Weather-App/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/show-the-local-weather",
          video: "Videos\\weatherEdited.mp4",
          class: "Weather"
        },
        {
          logo: " Images/quotesAppLogo.png ",
          color: "#008080",
          picture: " Images/quotesApp.png ",
          title: "Quotes",
          shortDesc:
            "This is a website that uses Angular to display quotes from various sources.",
          backend: "JavaScript, jQuery",
          frontend: "HTML5, CSS3, Responsive, Angular",
          productPaper:
            "I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",
          codeLink:
            "https://github.com/CrumrineCoder/Quote-Generator-Version-2",
          websiteLink:
            "https://crumrinecoder.github.io/Quote-Generator-Version-2/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/build-a-random-quote-machine",
          video: "Videos\\quoteEdited.mp4",
          class: "Quote"
        },
        {
          logo: " Images/wikipediaViewerLogo.png ",
          color: "#007CB6",
          picture: " Images/wikipediaViewer.png ",
          title: "Wiki Viewer",
          shortDesc:
            "This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",
          backend: "JavaScript, jQuery, Wikipedia API",
          frontend: "HTML5, CSS3, React.js, Responsive",
          productPaper:
            "I taught myself about using APIs with React and more about state management with this project.",
          codeLink: "https://github.com/CrumrineCoder/wikipediaviewerreact",
          websiteLink: "http://dark-yarn.surge.sh/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",
          video: "Videos\\wiki.mp4",
          class: "Wiki"
        },
        {
          logo: " Images/calculatorAppLogo.png ",
          color: "#865DAF",
          picture: " Images/calculatorApp.png ",
          title: "Calculator",
          shortDesc: "This is a web app that resembles a basic calculator.",
          backend: "JavaScript",
          frontend: "HTML5, CSS3, Responsive",
          productPaper:
            "I practiced JavaScript algorithm scripting with this project.",
          codeLink: "https://github.com/CrumrineCoder/Calculator",
          websiteLink: " https://crumrinecoder.github.io/Calculator/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/build-a-javascript-calculator",
          video: "Videos\\calcEdited.mp4",
          class: "Calc"
        },
        {
          logo: " Images/pomodoroAppLogo.png",
          color: "#E90000",
          picture: " Images/pomodoroApp.png ",
          title: "Pomodoro",
          shortDesc:
            "This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",
          backend: "JavaScript, jQuery",
          frontend: "HTML5, CSS3, Responsive",
          productPaper:
            "I practiced Async JavaScript design and minimalistic front end design.",
          codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2",
          websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/",
          freeCodeCampLink:
            "https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",
          video: "Videos\\pomodoroEdited.mp4",
          class: "Clock"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(idx) {
    this.setState({ selectedProjectIndex: idx, noProjectSelected: false });
  }

  render() {
    return (
      <div className="landingParallax">
        <div className="landingContainer">
          <Header
            selectedProjectIndex={this.state.selectedProjectIndex}
            projects={this.state.projects}>
          </Header>
          <Video
            selectedProjectIndex={this.state.selectedProjectIndex}
            projects={this.state.projects}>
          </Video>
          <ProjectInfo
            selectedProjectIndex={this.state.selectedProjectIndex}
            projects={this.state.projects}>
          </ProjectInfo>
        </div>
        <div className="landingBottomContainer">
          <ProjectBoxesContainer
            selectedProjectIndex={this.state.selectedProjectIndex}
            projects={this.state.projects}
            noProjectSelected={this.state.noProjectSelected}
            handleClick={this.handleClick}>
          </ProjectBoxesContainer>
        </div>
      </div>
    );
  }
}

export default Landing;
