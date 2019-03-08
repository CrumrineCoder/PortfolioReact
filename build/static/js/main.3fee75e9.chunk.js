(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(11),r=a.n(n),s=(a(18),a(3)),c=a(4),l=a(7),d=a(5),u=a(6),p=a(1),h=a(2),m=(a(9),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={selectedProjectIndex:0},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a.changePreview=a.changePreview.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({projects:e.projects,selectedProjectIndex:e.currentProjectIndex})}},{key:"handleClick",value:function(e){this.props.handleProjectChange(e),this.setState({selectedProjectIndex:e}),h.a.event({category:"Box",action:this.props.projects[e].title})}},{key:"changePreview",value:function(e){this.props.handleProjectPreview(e)}},{key:"initializeReactGA",value:function(){h.a.initialize("UA-114290573-1"),h.a.pageview("/homepage")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"projectSelectBoxes"},this.props.projects.map(function(t,a){return o.a.createElement("button",{key:a,type:"image",style:{background:t.color,opacity:e.state.selectedProjectIndex==a?".5":"1"},onMouseEnter:function(){return e.changePreview(a)},className:"projectSelectButton",onClick:function(){return e.handleClick(a)}},o.a.createElement("img",{src:t.logo,className:"projectSelectImage",alt:"Project Select"}),o.a.createElement("p",{className:"logoText"},"  ",t.title," "))}))}}]),t}(i.Component)),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={currentProject:a.props,videoIsPlaying:!0,showAdditionalInformation:!1,hiddenOverlay:!0},a.toggleInfoOverlay=a.toggleInfoOverlay.bind(Object(p.a)(Object(p.a)(a))),a.pause=a.pause.bind(Object(p.a)(Object(p.a)(a))),a.play=a.play.bind(Object(p.a)(Object(p.a)(a))),a.shadeHexColor=a.shadeHexColor.bind(Object(p.a)(Object(p.a)(a))),a.userClicksCode=a.userClicksCode.bind(Object(p.a)(Object(p.a)(a))),a.userClicksVisit=a.userClicksVisit.bind(Object(p.a)(Object(p.a)(a))),a.userClicksCaseStudy=a.userClicksCaseStudy.bind(Object(p.a)(Object(p.a)(a))),a.userClicksPrevious=a.userClicksPrevious.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.state.currentProject.title!==e.title?this.setState({currentProject:e,videoIsPlaying:!0}):this.setState({currentProject:e})}},{key:"carouselProject",value:function(e){this.props.handleCarouselProject(e),1==e?h.a.event({category:"Project",action:"CarouselRight"}):h.a.event({category:"Project",action:"CarouselLeft"})}},{key:"toggleInfoOverlay",value:function(){this.setState({showAdditionalInformation:!this.state.showAdditionalInformation}),h.a.event({category:"Project",action:"Toggle Info"})}},{key:"pause",value:function(){this.refs.vidRef.pause(),this.setState({videoIsPlaying:!1}),h.a.event({category:"Project",action:"Pause"})}},{key:"play",value:function(){this.refs.vidRef.play(),this.setState({videoIsPlaying:!0}),h.a.event({category:"Project",action:"Play"})}},{key:"shadeHexColor",value:function(e,t){var a=parseInt(e.slice(1),16),i=t<0?0:255,o=t<0?-1*t:t,n=a>>16,r=a>>8&255,s=255&a;return"#"+(16777216+65536*(Math.round((i-n)*o)+n)+256*(Math.round((i-r)*o)+r)+(Math.round((i-s)*o)+s)).toString(16).slice(1)}},{key:"userClicksCode",value:function(){h.a.event({category:"Project",action:"Code "+this.state.currentProject.title})}},{key:"userClicksVisit",value:function(){h.a.event({category:"Project",action:"Visit "+this.state.currentProject.title})}},{key:"userClicksCaseStudy",value:function(){h.a.event({category:"Project",action:"CaseStudy "+this.state.currentProject.title})}},{key:"userClicksPrevious",value:function(){h.a.event({category:"Project",action:"Previous "+this.state.currentProject.title})}},{key:"userClicksEmailMe",value:function(){h.a.event({category:"Project",action:"Email"})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"index"},o.a.createElement("div",{id:"projects"},o.a.createElement("div",{id:"video-jumbotron"},o.a.createElement("video",{ref:"vidRef",id:"projectPicture",autoPlay:!0,muted:!0,loop:!0,src:this.state.currentProject.video,type:"video/mp4"},"Your browser does not support HTML5 video.")),o.a.createElement("div",{id:"projectInfoText"},o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"video-controls"},o.a.createElement("i",{style:{display:this.state.videoIsPlaying?"block":"none"},onClick:this.pause,className:"fas fa-pause-circle video-control-button",id:"video-pause-button"}),o.a.createElement("i",{style:{display:this.state.videoIsPlaying?"none":"block"},onClick:this.play,className:"fas fa-play-circle video-control-button",id:"video-play-button"})),o.a.createElement("div",{id:"topLeftContent"},o.a.createElement("h1",{id:"projectTitle"}," ",this.state.currentProject.title," "),o.a.createElement("button",{id:"toggleButton",style:{background:this.state.currentProject.color},onClick:this.toggleInfoOverlay,className:this.state.currentProject.class,value:"Show More"},"Toggle Info"),o.a.createElement("div",{id:"projectAdditionalInformation",style:{display:this.state.showAdditionalInformation?"block":"none"}},o.a.createElement("ul",null,o.a.createElement("div",{id:"projectFrontEnd"},o.a.createElement("li",{className:"frontend"},"  ",this.state.currentProject.frontend," ")),o.a.createElement("div",{id:"projectBackEnd"},o.a.createElement("li",{className:"backend"},"  ",this.state.currentProject.backend," "))),o.a.createElement("p",null,"  ",this.state.currentProject.projectDescription),o.a.createElement("p",null," ",this.state.currentProject.productPaper," "),o.a.createElement("a",{onClick:this.userClicksPrevious,href:this.state.currentProject.prevWebsiteLink,style:{display:void 0!=this.state.currentProject.prevWebsiteLink?"block":"none"},className:"externalLinks",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("div",{id:"prev-code-link"},o.a.createElement("i",{className:"fas fa-external-link-alt fontIcon",rgb:"(0,0,0)"}," "),"See Previous Version of Website")))),o.a.createElement("ul",{id:"projectLinks"},o.a.createElement("a",{onClick:this.userClicksCode,href:this.state.currentProject.codeLink,className:"externalLinks",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("li",{className:this.state.currentProject.class,style:{background:this.state.currentProject.color},id:"code-link"},o.a.createElement("i",{className:"fas fa-code fontIcon"}),"See Code")),o.a.createElement("a",{onClick:this.userClicksVisit,href:this.state.currentProject.websiteLink,className:"externalLinks",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("li",{className:this.state.currentProject.class,style:{background:this.state.currentProject.color},id:"website-link"},o.a.createElement("i",{className:"fas fa-external-link-alt fontIcon"}),"Visit Website")),o.a.createElement("a",{onClick:this.userClicksCaseStudy,href:this.state.currentProject.caseStudyLink,style:{display:void 0!=this.state.currentProject.caseStudyLink?"block":"none"},className:"externalLinks",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("li",{className:this.state.currentProject.class,style:{background:this.state.currentProject.color},id:"case-link"},o.a.createElement("i",{className:"fas fa-book-open fontIcon"}),"Read Case Study"))))),o.a.createElement("button",{onClick:function(){return e.carouselProject(-1)},className:"sliderBtn",id:"backBtn"},o.a.createElement("i",{className:"fa fa-chevron-left"})),o.a.createElement("button",{onClick:function(){return e.carouselProject(1)},className:"sliderBtn",id:"nextBtn"},o.a.createElement("i",{className:"fa fa-chevron-right"}))),o.a.createElement("div",{id:"contactInfo",style:{background:this.state.currentProject.color}},o.a.createElement("i",{className:"fa fa-envelope-o fa-2x"}," "),o.a.createElement("h1",null,"Let's start"),o.a.createElement("h3",null," a new project together"),o.a.createElement("a",{onClick:this.userClicksEmailMe,id:"emailButton",style:{background:this.shadeHexColor(this.state.currentProject.color,-.5)},href:"mailto:crumrinecoding@gmail.com"},"Email Me"))))}}]),t}(i.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={currentProject:a.props,hiddenOverlay:!0},a.toggleOverlay=a.toggleOverlay.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({currentProject:e})}},{key:"toggleOverlay",value:function(){this.setState({hiddenOverlay:!this.state.hiddenOverlay}),h.a.event({category:"Project",action:"Toggle Preview"})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"overlay",className:"hiddenOverlay",style:{display:this.state.hiddenOverlay?"block":"none"}},o.a.createElement("button",{className:"toggleOverlayButton",onClick:this.toggleOverlay},o.a.createElement("i",{id:"toggleOverlayButtonIcon",className:"fas fa-chevron-down"})),o.a.createElement("div",{id:"overlayText",className:"shownOverlay"},o.a.createElement("h4",null,o.a.createElement("i",null,"Project Hover Preview")),o.a.createElement("h1",{id:"overlayTitle"}," ",this.state.currentProject.title,"  "),o.a.createElement("ul",null,o.a.createElement("div",{id:"overlayFrontEnd"},o.a.createElement("li",{className:"frontend"},"  ",this.state.currentProject.frontend," ")),o.a.createElement("div",{id:"overlayBackEnd"},o.a.createElement("li",{className:"backend"},"  ",this.state.currentProject.backend," "))),o.a.createElement("h3",null,"Click on the Project Icon to learn more!"))),o.a.createElement("button",{id:"toggleOverlayButtonClosed",className:"toggleOverlayButton",onClick:this.toggleOverlay,style:{display:this.state.hiddenOverlay?"none":"block"}},o.a.createElement("i",{id:"toggleOverlayButtonIcon",className:"fas fa-chevron-up"})))}}]),t}(i.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleProjectChange=function(e){a.setState({index:e})},a.handleCarouselProject=function(e){a.state.index==a.state.projects.length-1&&1==e?a.setState({index:0}):0==a.state.index&&-1==e?a.setState({index:a.state.projects.length-1}):a.setState({index:a.state.index+e})},a.handleProjectPreview=function(e){a.setState({mouseIndex:e})},a.state={projects:[{logo:"Images/votingAppLogo.png ",color:"#A61C88",title:"Polling",shortDesc:"This React.js & Redux fullstack website lets users create, view, and vote on polls.",backend:"JavaScript, Node.js, Express.js, Firebase, MongoDB, Mongoose, jwt, Passport",frontend:"React.js, Redux.js, react-router, HTML5, CSS3, Bootstrap 4, Responsive",productPaper:"This website is an updated version of one I made last year. I taught myself Redux and react-router while developing my React.js fullstack skills. I refactored the app to learn Firebase. I am still adding new features.",codeLink:"https://github.com/CrumrineCoder/Polling",websiteLink:"https://polling-269dc.firebaseapp.com/#/",prevWebsiteLink:"https://joinordie.glitch.me/",caseStudyLink:"https://nicolascrumrine.herokuapp.com/#/posts/5c253ffad802b53cdcc17e00",video:"Videos/pollingReactEdited.mp4",class:"Poll"},{logo:"Images/cookiesWebsiteLogo.png ",color:"#18788C",picture:" Images/cookiesWebsite.png ",title:"Penny's Cookies",shortDesc:"This is a portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",backend:"JavaScript, PHP, jQuery",frontend:"HTML5, CSS3, Responsive, Swiper, Intense Images, Mail Chimp",productPaper:"I taught myself about developing a marketing strategy, writing a competitive analysis, scheduling, and writing user stories with a client. I also learned about working with another designer. I taught myself PHP to develop the email forms. I also taught myself a few other minor libraries and services.",codeLink:"https://github.com/CrumrineCoder/PJRevised",websiteLink:"http://pennyjanescookies.com/",video:"Videos\\pjcEdited.mp4",class:"Penny"},{logo:" Images/npcLookUpLogo.png ",color:"#EF281A",picture:" Images/npcLookUpv2.png ",title:"NPC Lookup",shortDesc:"This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",backend:"JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",codeLink:"https://github.com/CrumrineCoder/NPC-LOOK-UP",websiteLink:"https://npclookup.glitch.me/",video:"Videos\\npcEdited.mp4",class:"NPC"},{logo:" Images/twitchViewerLogo.png ",color:"#6441A4",picture:" Images/twitchViewer.png ",title:"Twitch Viewer",shortDesc:"This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",backend:"JavaScript, jQuery, Twitch.tv API",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",codeLink:"https://github.com/CrumrineCoder/Twitch-Viewer-Redone",websiteLink:"https://crumrinecoder.github.io/Twitch-Viewer-Redone/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/show-the-local-weather",video:"Videos\\twitchEdited.mp4",class:"Twitch"},{logo:"Images/tmbgLogo.png ",color:"#171E26",title:"TMBG",shortDesc:"This is a landing page redesign for the They Might Be Giants website.",backend:"JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",frontend:"HTML5, CSS3, Responsive, Angular, Sass",productPaper:"I built this website as a Capstone project for everything I've learnt in the past year. The website allows users to anonymously comment on the newest album and to find the nearest tour. The website is also a practice in business marketing and design. Links and most buttons are placeholders.",codeLink:"https://github.com/CrumrineCoder/TheyMightBeGiantsv3",websiteLink:"https://tmbg.herokuapp.com/",video:"Videos/tmbgEdited.mp4",class:"TMBG"},{logo:" Images/connectFourAppLogo.png ",color:"#FF7F11",picture:" Images/connectFourApp.png ",title:"Connect Four",shortDesc:"This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",backend:"JavaScript, minimax Algorithms",frontend:"HTML5, CSS3",productPaper:"This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",codeLink:"https://github.com/CrumrineCoder/connect4-version2",websiteLink:"https://crumrinecoder.github.io/connect4-version2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",video:"Videos\\c4Edited.mp4",class:"C4"},{logo:" Images/weatherApp%20logo.png ",color:"#048027",picture:" Images/weatherApp.png ",title:"Weather",shortDesc:"This is a web app that shows the weather based on location.",backend:"JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",frontend:"HTML5, CSS3, Responsive, Angular, Sass",productPaper:"I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",codeLink:"https://github.com/CrumrineCoder/Weather-App",websiteLink:"https://crumrinecoder.github.io/Weather-App/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/show-the-local-weather",video:"Videos\\weatherEdited.mp4",class:"Weather"},{logo:" Images/quotesAppLogo.png ",color:"#008080",picture:" Images/quotesApp.png ",title:"Quotes",shortDesc:"This is a website that uses Angular to display quotes from various sources.",backend:"JavaScript, jQuery",frontend:"HTML5, CSS3, Responsive, Angular",productPaper:"I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",codeLink:"https://github.com/CrumrineCoder/Quote-Generator-Version-2",websiteLink:"https://crumrinecoder.github.io/Quote-Generator-Version-2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-random-quote-machine",video:"Videos\\quoteEdited.mp4",class:"Quote"},{logo:" Images/wikipediaViewerLogo.png ",color:"#007CB6",picture:" Images/wikipediaViewer.png ",title:"Wiki Viewer",shortDesc:"This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",backend:"JavaScript, jQuery, Wikipedia API",frontend:"HTML5, CSS3, React.js, Responsive",productPaper:"I taught myself about using APIs with React and more about state management with this project.",codeLink:"https://github.com/CrumrineCoder/wikipediaviewerreact",websiteLink:"http://dark-yarn.surge.sh/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",video:"Videos\\wiki.mp4",class:"Wiki"},{logo:" Images/calculatorAppLogo.png ",color:"#865DAF",picture:" Images/calculatorApp.png ",title:"Calculator",shortDesc:"This is a web app that resembles a basic calculator.",backend:"JavaScript",frontend:"HTML5, CSS3, Responsive",productPaper:"I practiced JavaScript algorithm scripting with this project.",codeLink:"https://github.com/CrumrineCoder/Calculator",websiteLink:" https://crumrinecoder.github.io/Calculator/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-javascript-calculator",video:"Videos\\calcEdited.mp4",class:"Calc"},{logo:" Images/pomodoroAppLogo.png",color:"#E90000",picture:" Images/pomodoroApp.png ",title:"Pomodoro",shortDesc:"This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",backend:"JavaScript, jQuery",frontend:"HTML5, CSS3, Responsive",productPaper:"I practiced Async JavaScript design and minimalistic front end design.",codeLink:"https://github.com/CrumrineCoder/Pomodoro-Version-2",websiteLink:"https://crumrinecoder.github.io/Pomodoro-Version-2/",freeCodeCampLink:"https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",video:"Videos\\pomodoroEdited.mp4",class:"Clock"}],index:0,mouseIndex:0},a.userClicksAboutMe=a.userClicksAboutMe.bind(Object(p.a)(Object(p.a)(a))),a.userClicksGithub=a.userClicksGithub.bind(Object(p.a)(Object(p.a)(a))),a.userClicksLinkedIn=a.userClicksLinkedIn.bind(Object(p.a)(Object(p.a)(a))),a.userClicksEmail=a.userClicksEmail.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"initializeReactGA",value:function(){h.a.initialize("UA-114290573-1"),h.a.pageview("/homepage")}},{key:"userClicksAboutMe",value:function(){h.a.event({category:"Nav",action:"About Me"})}},{key:"userClicksGithub",value:function(){h.a.event({category:"Nav",action:"Github"})}},{key:"userClicksLinkedIn",value:function(){h.a.event({category:"Nav",action:"LinkedIn"})}},{key:"userClicksEmail",value:function(){h.a.event({category:"Nav",action:"Email"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("nav",{id:"nav",style:{borderColor:this.state.projects[this.state.index].color}},o.a.createElement("ul",null,o.a.createElement("li",{id:"nameNavContainer"},o.a.createElement("img",{id:"navProfileImage",src:"Images/profile.jpg"}),o.a.createElement("div",{id:"nameNavContainerText"},o.a.createElement("p",{id:"nic"}," Nicolas Crumrine "),o.a.createElement("p",{id:"nicJob"},"Front End Web Developer based in NYC",o.a.createElement("a",{id:"aboutMeButton",href:"https://nicolascrumrine.com/#/about",rel:"noopener noreferrer",target:"_blank",onClick:this.userClicksAboutMe},"About Me")))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/CrumrineCoder",id:"github",title:"Github",rel:"noopener noreferrer",target:"_blank",onClick:this.userClicksGithub},o.a.createElement("i",{className:"fab fa-github navIcon",border:"0"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/nicolas-crumrine-50899b120/",title:"link",rel:"noopener noreferrer",target:"_blank",onClick:this.userClicksLinkedIn},o.a.createElement("i",{className:"fab fa-linkedin-in navIcon",border:"0"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:crumrinecoding@gmail.com",title:"Email",rel:"noopener noreferrer",target:"_blank",onClick:this.userClicksEmail},o.a.createElement("i",{className:"fas fa-envelope navIcon",border:"0"}))))),o.a.createElement(m,{handleProjectChange:this.handleProjectChange,handleProjectPreview:this.handleProjectPreview,projects:this.state.projects,currentProjectIndex:this.state.index}),o.a.createElement(g,Object.assign({handleCarouselProject:this.handleCarouselProject},this.state.projects[this.state.index])),o.a.createElement(b,this.state.projects[this.state.mouseIndex]))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.3fee75e9.chunk.js.map