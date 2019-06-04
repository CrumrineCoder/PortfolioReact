(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,o){e.exports=o(36)},22:function(e,t,o){},36:function(e,t,o){"use strict";o.r(t);var a=o(0),i=o.n(a),s=o(12),r=o.n(s),n=(o(22),o(3)),c=o(4),l=o(6),p=o(5),d=o(7),h=o(1),u=o(2),m=(o(9),function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={profile:"Images\\profileNicMay2019.jpg"},o}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"landingNav"},i.a.createElement("div",{className:"landingNavLeftHandContainer"},i.a.createElement("img",{className:"landingNavProfileImage",src:this.state.profile}),this.props.selectedProjectIndex,null!==this.props.selectedProjectIndex?i.a.createElement("h2",{className:"landingNavProfileName"},"Nicolas Crumrine"):i.a.createElement("h2",{className:"landingNavProfileName"})),null!==this.props.selectedProjectIndex?i.a.createElement("div",{className:"landingNavRightHandContainer"},i.a.createElement("a",{href:"https://nicolascrumrine.com/#/about",rel:"noopener noreferrer",target:"_blank",className:this.props.projects[this.props.selectedProjectIndex].class+" landingNavItem"},"About"),i.a.createElement("a",{href:"https://github.com/CrumrineCoder",id:"github",title:"Github",rel:"noopener noreferrer",target:"_blank",className:this.props.projects[this.props.selectedProjectIndex].class+" landingNavItem"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/nicolas-crumrine-50899b120/",title:"link",rel:"noopener noreferrer",target:"_blank",className:this.props.projects[this.props.selectedProjectIndex].class+" landingNavItem"},i.a.createElement("i",{className:"fab fa-linkedin-in"})),i.a.createElement("a",{href:"mailto:crumrinecoding@gmail.com",title:"Email",rel:"noopener noreferrer",className:this.props.projects[this.props.selectedProjectIndex].class+" landingNavItem"},i.a.createElement("i",{className:"fas fa-envelope"}))):i.a.createElement("div",{className:"landingNavRightHandContainer"},i.a.createElement("a",{href:"https://nicolascrumrine.com/#/about",rel:"noopener noreferrer",target:"_blank",className:"landingNavItem"},"About"),i.a.createElement("a",{href:"https://github.com/CrumrineCoder",id:"github",title:"Github",rel:"noopener noreferrer",target:"_blank",className:"landingNavItem"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("a",{href:"https://www.linkedin.com/in/nicolas-crumrine-50899b120/",title:"link",rel:"noopener noreferrer",target:"_blank",className:"landingNavItem"},i.a.createElement("i",{className:"fab fa-linkedin-in"})),i.a.createElement("a",{href:"mailto:crumrinecoding@gmail.com",title:"Email",rel:"noopener noreferrer",className:"landingNavItem"},i.a.createElement("i",{className:"fas fa-envelope"}))))}}]),t}(a.Component)),g=o(10),b=o.n(g),k=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={video:"Videos\\portfolioMetro.mp4"},o}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=i.a.createElement("div",{key:this.props.selectedProjectIndex,className:"landingVideoContainer"},null!==this.props.selectedProjectIndex?i.a.createElement("video",{ref:"vidRef",className:"landingVideo",autoPlay:!0,muted:!0,loop:!0,src:this.props.projects[this.props.selectedProjectIndex].video||this.state.video,type:"video/mp4"},"Your browser does not support HTML5 video."):i.a.createElement("video",{ref:"vidRef",className:"landingVideo",autoPlay:!0,muted:!0,loop:!0,src:this.state.video,type:"video/mp4"},"Your browser does not support HTML5 video."));return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{transitionName:"video",transitionEnterTimeout:400,transitionLeaveTimeout:400},e),i.a.createElement("div",{className:"overlay"}))}}]),t}(a.Component),w=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},o}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.props);var e=i.a.createElement("div",{key:this.props.selectedProjectIndex,className:"landingTitleBody"},i.a.createElement("div",{className:"landingTitle"},null!==this.props.selectedProjectIndex?this.props.projects[this.props.selectedProjectIndex].title:"Nicolas Crumrine"),null!==this.props.selectedProjectIndex?i.a.createElement("div",null,i.a.createElement("div",{className:"landingAdditionalInfo"},i.a.createElement("ul",{className:"landingAdditionalInfoPills"},i.a.createElement("div",{id:"projectFrontEnd"},i.a.createElement("li",{className:"frontend"},this.props.projects[this.props.selectedProjectIndex].frontend)),i.a.createElement("div",{id:"projectBackEnd"},i.a.createElement("li",{className:"backend"},this.props.projects[this.props.selectedProjectIndex].backend))),i.a.createElement("p",null,this.props.projects[this.props.selectedProjectIndex].shortDesc),i.a.createElement("p",null,this.props.projects[this.props.selectedProjectIndex].productPaper),i.a.createElement("a",{onClick:this.userClicksPrevious,href:this.props.projects[this.props.selectedProjectIndex].prevWebsiteLink,style:{display:void 0!=this.props.projects[this.props.selectedProjectIndex].prevWebsiteLink?"block":"none"},className:"externalLinks",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("div",{id:"prev-code-link"},i.a.createElement("i",{className:"fas fa-external-link-alt fontIcon",rgb:"(0,0,0)"}),"See Previous Version of Website")))):i.a.createElement("div",{className:"landingSubTitle"},"Front End Web Developer"));return i.a.createElement(b.a,{transitionName:"projectInfo",transitionEnterTimeout:100,transitionLeaveTimeout:100},e)}}]),t}(a.Component),v=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},o}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("button",{key:this.props.idx,type:"image",style:{background:this.props.project.color},className:"landingBox",onMouseOver:function(){return e.props.handleClick(e.props.idx)}},i.a.createElement("div",{className:"landingBoxInner",style:{backgroundImage:"url(".concat(this.props.project.logo,")")}},i.a.createElement("a",{href:this.props.project.codeLink,className:void 0===this.props.project.caseStudyLink?"landingBoxExternalLink landingBoxExternalLink2":"landingBoxExternalLink landingBoxExternalLink3",rel:"noopener noreferrer",target:"_blank",disabled:this.props.noProjectSelected},i.a.createElement("li",{className:this.props.noProjectSelected?this.props.project.class+" hiddenLink":this.props.selectedProjectIndex==this.props.idx?this.props.project.class:this.props.project.class+" hiddenLink",style:{background:this.props.project.color},id:"code-link"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-code fontIcon"}),"See Code"))),i.a.createElement("a",{href:this.props.project.websiteLink,className:void 0===this.props.project.caseStudyLink?"landingBoxExternalLink landingBoxExternalLink2":"landingBoxExternalLink landingBoxExternalLink3",rel:"noopener noreferrer",target:"_blank",disabled:this.props.noProjectSelected},i.a.createElement("li",{className:this.props.noProjectSelected?this.props.project.class+" hiddenLink":this.props.selectedProjectIndex==this.props.idx?this.props.project.class:this.props.project.class+" hiddenLink",style:{background:this.props.project.color},id:"website-link"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-external-link-alt fontIcon"}),"Visit Website"))),void 0!==this.props.project.caseStudyLink&&i.a.createElement("a",{href:this.props.project.caseStudyLink,className:void 0===this.props.project.caseStudyLink?"landingBoxExternalLink landingBoxExternalLink2":"landingBoxExternalLink landingBoxExternalLink3",rel:"noopener noreferrer",target:"_blank",disabled:this.props.noProjectSelected},i.a.createElement("li",{className:this.props.noProjectSelected?this.props.project.class+" hiddenLink":this.props.selectedProjectIndex==this.props.idx?this.props.project.class:this.props.project.class+" hiddenLink",style:{background:this.props.project.color},id:"case-link"},i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-book-open fontIcon"}),"Case Study")))))}}]),t}(a.Component),f=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.props.noProjectSelected?"landingBoxesContainer customScrollBar":this.props.projects[this.props.selectedProjectIndex].class+"Bar landingBoxesContainer customScrollBar"},this.props.projects.map(function(t,o){return i.a.createElement(v,{selectedProjectIndex:e.props.selectedProjectIndex,project:t,noProjectSelected:e.props.noProjectSelected,idx:o,handleClick:e.props.handleClick})}))}}]),t}(a.Component),j=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={noProjectSelected:!0,selectedProjectIndex:null,projects:[{logo:"Images/raptureLogo.png ",color:"#218F7D",title:"Rapture Fashion",shortDesc:"React and Shopify Boutique Fashion site",frontend:"React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4",backend:"JavaScript, Shopify Storefront API, Firebase",productPaper:"This website was a study on UX research, UI design, marketing, and how to integrate Shopify with React all so I can build small business websites.",codeLink:"https://github.com/CrumrineCoder/RaptureFashion/",websiteLink:"https://rapture-fashion.firebaseapp.com/#/",caseStudyLink:"https://nicolascrumrine.com/#/posts/-LecEwsYvjJNcwIJJjao",video:"Videos/raptureFashion.mp4",class:"Rapture"},{logo:"Images/votingAppLogo.png ",color:"#A61C88",title:"Polling",shortDesc:"React.js & Redux fullstack website where users create, view, and vote on polls.",backend:"JavaScript, Node.js, Express.js, Firebase, MongoDB, Mongoose, jwt, Passport",frontend:"React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4, Responsive",productPaper:"Taught myself Redux and react-router with a backend. This version uses Firebase, Node version: https://github.com/CrumrineCoder/PollingReactNodeBase",codeLink:"https://github.com/CrumrineCoder/Polling",websiteLink:"https://polling-269dc.firebaseapp.com/#/",caseStudyLink:"https://nicolascrumrine.herokuapp.com/#/posts/5c253ffad802b53cdcc17e00",video:"Videos/pollingReactEdited.mp4",class:"Poll"},{logo:"Images/cookiesWebsiteLogo.png ",color:"#18788C",picture:" Images/cookiesWebsite.png ",title:"Penny's Cookies",shortDesc:"Portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",backend:"JavaScript, PHP, jQuery",frontend:"HTML5, CSS3, Responsive",productPaper:"Worked with another designer. Developed marketing strategy, wrote a competitive analysis, scheduled and wrote user stories with client.",codeLink:"https://github.com/CrumrineCoder/PJRevised",websiteLink:"http://pennyjanescookies.com/",video:"Videos\\pjcEdited.mp4",class:"Penny"},{logo:" Images/npcLookUpLogo.png ",color:"#EF281A",picture:" Images/npcLookUpv2.png ",title:"NPC Lookup",shortDesc:"This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",backend:"JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",codeLink:"https://github.com/CrumrineCoder/NPC-LOOK-UP",websiteLink:"https://npclookup.glitch.me/",video:"Videos\\npcEdited.mp4",class:"NPC"},{logo:" Images/twitchViewerLogo.png ",color:"#6441A4",picture:" Images/twitchViewer.png ",title:"Twitch Viewer",shortDesc:"This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",backend:"JavaScript, jQuery, Twitch.tv API",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",codeLink:"https://github.com/CrumrineCoder/Twitch-Viewer-Redone",websiteLink:"https://crumrinecoder.github.io/Twitch-Viewer-Redone/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/show-the-local-weather",video:"Videos\\twitchEdited.mp4",class:"Twitch"},{logo:"Images/tmbgLogo.png ",color:"#171E26",title:"TMBG",shortDesc:"This is a landing page redesign for the They Might Be Giants website.",backend:"JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",frontend:"HTML5, CSS3, Responsive, Angular, Sass",productPaper:"The website allows users to anonymously comment on the newest album and to find the nearest tour. Also a practice in business marketing and design. Links and most buttons are placeholders.",codeLink:"https://github.com/CrumrineCoder/TheyMightBeGiantsv3",websiteLink:"https://tmbg.herokuapp.com/",video:"Videos/tmbgEdited.mp4",class:"TMBG"},{logo:" Images/connectFourAppLogo.png ",color:"#FF7F11",picture:" Images/connectFourApp.png ",title:"Connect Four",shortDesc:"This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",backend:"JavaScript, minimax Algorithms",frontend:"HTML5, CSS3",productPaper:"This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",codeLink:"https://github.com/CrumrineCoder/connect4-version2",websiteLink:"https://crumrinecoder.github.io/connect4-version2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",video:"Videos\\c4Edited.mp4",class:"C4"},{logo:" Images/weatherApp%20logo.png ",color:"#048027",picture:" Images/weatherApp.png ",title:"Weather",shortDesc:"This is a web app that shows the weather based on location.",backend:"JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",frontend:"HTML5, CSS3, Responsive, Angular, Sass",productPaper:"I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",codeLink:"https://github.com/CrumrineCoder/Weather-App",websiteLink:"https://crumrinecoder.github.io/Weather-App/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/show-the-local-weather",video:"Videos\\weatherEdited.mp4",class:"Weather"},{logo:" Images/quotesAppLogo.png ",color:"#008080",picture:" Images/quotesApp.png ",title:"Quotes",shortDesc:"This is a website that uses Angular to display quotes from various sources.",backend:"JavaScript, jQuery",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",codeLink:"https://github.com/CrumrineCoder/Quote-Generator-Version-2",websiteLink:"https://crumrinecoder.github.io/Quote-Generator-Version-2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-random-quote-machine",video:"Videos\\quoteEdited.mp4",class:"Quote"},{logo:" Images/wikipediaViewerLogo.png ",color:"#007CB6",picture:" Images/wikipediaViewer.png ",title:"Wiki Viewer",shortDesc:"This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",backend:"JavaScript, jQuery, Wikipedia API",frontend:"HTML5, CSS3, React.js, Responsive",productPaper:"I taught myself about using APIs with React and more about state management with this project.",codeLink:"https://github.com/CrumrineCoder/wikipediaviewerreact",websiteLink:"http://dark-yarn.surge.sh/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",video:"Videos\\wiki.mp4",class:"Wiki"},{logo:" Images/calculatorAppLogo.png ",color:"#865DAF",picture:" Images/calculatorApp.png ",title:"Calculator",shortDesc:"This is a web app that resembles a basic calculator.",backend:"JavaScript",frontend:"HTML5, CSS3, Responsive",productPaper:"I practiced JavaScript algorithm scripting with this project.",codeLink:"https://github.com/CrumrineCoder/Calculator",websiteLink:" https://crumrinecoder.github.io/Calculator/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-javascript-calculator",video:"Videos\\calcEdited.mp4",class:"Calc"},{logo:" Images/pomodoroAppLogo.png",color:"#E90000",picture:" Images/pomodoroApp.png ",title:"Pomodoro",shortDesc:"This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",backend:"JavaScript, jQuery",frontend:"HTML5, CSS3, Responsive",productPaper:"I practiced Async JavaScript design and minimalistic front end design.",codeLink:"https://github.com/CrumrineCoder/Pomodoro-Version-2",websiteLink:"https://crumrinecoder.github.io/Pomodoro-Version-2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",video:"Videos\\pomodoroEdited.mp4",class:"Clock"}]},o.handleClick=o.handleClick.bind(Object(h.a)(Object(h.a)(o))),o}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({selectedProjectIndex:e,noProjectSelected:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"landingParallax"},i.a.createElement("div",{className:"landingContainer"},i.a.createElement(m,{selectedProjectIndex:this.state.selectedProjectIndex,projects:this.state.projects}),i.a.createElement(k,{selectedProjectIndex:this.state.selectedProjectIndex,projects:this.state.projects}),i.a.createElement(w,{selectedProjectIndex:this.state.selectedProjectIndex,projects:this.state.projects})),i.a.createElement("div",{className:"landingBottomContainer"},i.a.createElement(f,{selectedProjectIndex:this.state.selectedProjectIndex,projects:this.state.projects,noProjectSelected:this.state.noProjectSelected,handleClick:this.handleClick})))}}]),t}(a.Component),C=(a.Component,a.Component,a.Component,function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleProjectChange=function(e){o.setState({index:e})},o.handleCarouselProject=function(e){o.state.index==o.state.projects.length-1&&1==e?o.setState({index:0}):0==o.state.index&&-1==e?o.setState({index:o.state.projects.length-1}):o.setState({index:o.state.index+e})},o.handleProjectPreview=function(e){o.setState({mouseIndex:e})},o.state={projects:[{logo:"Images/raptureLogo.png ",color:"#218F7D",title:"Rapture Fashion",shortDesc:"React and Shopify Boutique Fashion site",backend:"JavaScript, Shopify Storefront API, Firebase",frontend:"React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4",productPaper:"This website was a study on UX research, UI design, marketing, and how to integrate Shopify with React all so I can build small business websites.",codeLink:"https://github.com/CrumrineCoder/RaptureFashion/",websiteLink:"https://rapture-fashion.firebaseapp.com/#/",caseStudyLink:"https://nicolascrumrine.com/#/posts/-LecEwsYvjJNcwIJJjao",video:"Videos/raptureFashion.mp4",class:"Rapture"},{logo:"Images/votingAppLogo.png ",color:"#A61C88",title:"Polling",shortDesc:"This React.js & Redux fullstack website lets users create, view, and vote on polls.",backend:"JavaScript, Node.js, Express.js, Firebase, MongoDB, Mongoose, jwt, Passport",frontend:"React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4, Responsive",productPaper:"This website is an updated version of one I made last year. I taught myself Redux and react-router while developing my React.js fullstack skills. I refactored the app to learn Firebase, here is the code for the Node version of this app: https://github.com/CrumrineCoder/PollingReactNodeBase ",codeLink:"https://github.com/CrumrineCoder/Polling",websiteLink:"https://polling-269dc.firebaseapp.com/#/",prevWebsiteLink:"https://joinordie.glitch.me/",caseStudyLink:"https://nicolascrumrine.herokuapp.com/#/posts/5c253ffad802b53cdcc17e00",video:"Videos/pollingReactEdited.mp4",class:"Poll"},{logo:"Images/cookiesWebsiteLogo.png ",color:"#18788C",picture:" Images/cookiesWebsite.png ",title:"Penny's Cookies",shortDesc:"This is a portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",backend:"JavaScript, PHP, jQuery",frontend:"HTML5, CSS3, Responsive, Swiper, Intense Images, Mail Chimp",productPaper:"I taught myself about developing a marketing strategy, writing a competitive analysis, scheduling, and writing user stories with a client. I also learned about working with another designer. I taught myself PHP to develop the email forms. I also taught myself a few other minor libraries and services.",codeLink:"https://github.com/CrumrineCoder/PJRevised",websiteLink:"http://pennyjanescookies.com/",video:"Videos\\pjcEdited.mp4",class:"Penny"},{logo:" Images/npcLookUpLogo.png ",color:"#EF281A",picture:" Images/npcLookUpv2.png ",title:"NPC Lookup",shortDesc:"This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",backend:"JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",codeLink:"https://github.com/CrumrineCoder/NPC-LOOK-UP",websiteLink:"https://npclookup.glitch.me/",video:"Videos\\npcEdited.mp4",class:"NPC"},{logo:" Images/twitchViewerLogo.png ",color:"#6441A4",picture:" Images/twitchViewer.png ",title:"Twitch Viewer",shortDesc:"This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",backend:"JavaScript, jQuery, Twitch.tv API",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",codeLink:"https://github.com/CrumrineCoder/Twitch-Viewer-Redone",websiteLink:"https://crumrinecoder.github.io/Twitch-Viewer-Redone/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/show-the-local-weather",video:"Videos\\twitchEdited.mp4",class:"Twitch"},{logo:"Images/tmbgLogo.png ",color:"#171E26",title:"TMBG",shortDesc:"This is a landing page redesign for the They Might Be Giants website.",backend:"JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",frontend:"HTML5, CSS3, Responsive, Angular, Sass",productPaper:"I built this website as a Capstone project for everything I've learnt in the past year. The website allows users to anonymously comment on the newest album and to find the nearest tour. The website is also a practice in business marketing and design. Links and most buttons are placeholders.",codeLink:"https://github.com/CrumrineCoder/TheyMightBeGiantsv3",websiteLink:"https://tmbg.herokuapp.com/",video:"Videos/tmbgEdited.mp4",class:"TMBG"},{logo:" Images/connectFourAppLogo.png ",color:"#FF7F11",picture:" Images/connectFourApp.png ",title:"Connect Four",shortDesc:"This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",backend:"JavaScript, minimax Algorithms",frontend:"HTML5, CSS3",productPaper:"This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",codeLink:"https://github.com/CrumrineCoder/connect4-version2",websiteLink:"https://crumrinecoder.github.io/connect4-version2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",video:"Videos\\c4Edited.mp4",class:"C4"},{logo:" Images/weatherApp%20logo.png ",color:"#048027",picture:" Images/weatherApp.png ",title:"Weather",shortDesc:"This is a web app that shows the weather based on location.",backend:"JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",frontend:"HTML5, CSS3, Responsive, Angular, Sass",productPaper:"I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",codeLink:"https://github.com/CrumrineCoder/Weather-App",websiteLink:"https://crumrinecoder.github.io/Weather-App/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/show-the-local-weather",video:"Videos\\weatherEdited.mp4",class:"Weather"},{logo:" Images/quotesAppLogo.png ",color:"#008080",picture:" Images/quotesApp.png ",title:"Quotes",shortDesc:"This is a website that uses Angular to display quotes from various sources.",backend:"JavaScript, jQuery",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",codeLink:"https://github.com/CrumrineCoder/Quote-Generator-Version-2",websiteLink:"https://crumrinecoder.github.io/Quote-Generator-Version-2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-random-quote-machine",video:"Videos\\quoteEdited.mp4",class:"Quote"},{logo:" Images/wikipediaViewerLogo.png ",color:"#007CB6",picture:" Images/wikipediaViewer.png ",title:"Wiki Viewer",shortDesc:"This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",backend:"JavaScript, jQuery, Wikipedia API",frontend:"HTML5, CSS3, React.js, Responsive",productPaper:"I taught myself about using APIs with React and more about state management with this project.",codeLink:"https://github.com/CrumrineCoder/wikipediaviewerreact",websiteLink:"http://dark-yarn.surge.sh/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",video:"Videos\\wiki.mp4",class:"Wiki"},{logo:" Images/calculatorAppLogo.png ",color:"#865DAF",picture:" Images/calculatorApp.png ",title:"Calculator",shortDesc:"This is a web app that resembles a basic calculator.",backend:"JavaScript",frontend:"HTML5, CSS3, Responsive",productPaper:"I practiced JavaScript algorithm scripting with this project.",codeLink:"https://github.com/CrumrineCoder/Calculator",websiteLink:" https://crumrinecoder.github.io/Calculator/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-javascript-calculator",video:"Videos\\calcEdited.mp4",class:"Calc"},{logo:" Images/pomodoroAppLogo.png",color:"#E90000",picture:" Images/pomodoroApp.png ",title:"Pomodoro",shortDesc:"This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",backend:"JavaScript, jQuery",frontend:"HTML5, CSS3, Responsive",productPaper:"I practiced Async JavaScript design and minimalistic front end design.",codeLink:"https://github.com/CrumrineCoder/Pomodoro-Version-2",websiteLink:"https://crumrinecoder.github.io/Pomodoro-Version-2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",video:"Videos\\pomodoroEdited.mp4",class:"Clock"}],index:0,mouseIndex:0},o.userClicksAboutMe=o.userClicksAboutMe.bind(Object(h.a)(Object(h.a)(o))),o.userClicksGithub=o.userClicksGithub.bind(Object(h.a)(Object(h.a)(o))),o.userClicksLinkedIn=o.userClicksLinkedIn.bind(Object(h.a)(Object(h.a)(o))),o.userClicksEmail=o.userClicksEmail.bind(Object(h.a)(Object(h.a)(o))),o}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e=["https://cdn.rawgit.com/bradley/Blotter/3007fe6e/build/blotter.min.js","https://cdn.rawgit.com/bradley/Blotter/3007fe6e/build/materials/channelSplitMaterial.js","https://cdn.rawgit.com/bradley/Blotter/3007fe6e/build/materials/fliesMaterial.js"],t=0;t<e.length;t++){var o=document.createElement("script");o.src=e[t],o.async=!0,document.body.appendChild(o)}}},{key:"initializeReactGA",value:function(){u.a.initialize("UA-114290573-1"),u.a.pageview("/homepage")}},{key:"userClicksAboutMe",value:function(){u.a.event({category:"Nav",action:"About Me"})}},{key:"userClicksGithub",value:function(){u.a.event({category:"Nav",action:"Github"})}},{key:"userClicksLinkedIn",value:function(){u.a.event({category:"Nav",action:"LinkedIn"})}},{key:"userClicksEmail",value:function(){u.a.event({category:"Nav",action:"Email"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(j,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,o){}},[[16,1,2]]]);
//# sourceMappingURL=main.13cd833b.chunk.js.map