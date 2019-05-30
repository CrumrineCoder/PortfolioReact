

import React, { Component, useState, useCallback } from "react";
import { Spring, Transition } from 'react-spring/renderprops';
import { useTransition, animated, config } from 'react-spring'
import Fade from 'react-reveal/Fade';

class ProjectInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //this.state = this.props;
    }

    render() {

        /*   const pages = [
               ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
               ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
               ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
           ]
   
      
               const [index, set] = useState(0)
               const onClick = useCallback(() => set(state => (state + 1) % 3), [])
               const transitions = useTransition(index, p => p, {
                   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
                   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
                   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
               })
               return (
                   <div className="simple-trans-main" onClick={onClick}>
                       {transitions.map(({ item, props, key }) => {
                           const Page = pages[item]
                           return <Page key={key} style={props} />
                       })}
                   </div>
               )
           
   
           render(<App />, document.getElementById('root')) */
        let projects = this.props.projects;
        return (
            <Fade right>
                <div className="landingTitle">
                    {this.props.selectedProjectIndex !== null
                        ? this.props.projects[this.props.selectedProjectIndex].title
                        : "Nicolas Crumrine"}
                </div>
            </Fade>
        );
    }
}

export default ProjectInfo;

/*
  <div className="landingTitle">
                                        {this.props.selectedProjectIndex !== null
                                            ? this.props.projects[this.props.selectedProjectIndex].title
                                            : "Nicolas Crumrine"}
                                    </div>
                                    {this.props.selectedProjectIndex !== null ? (
                                        <div>
                                            <div className="landingAdditionalInfo">
                                                <ul className="landingAdditionalInfoPills">
                                                    <div id="projectFrontEnd">
                                                        <li className="frontend">
                                                            {
                                                                this.props.projects[this.props.selectedProjectIndex]
                                                                    .frontend
                                                            }
                                                        </li>
                                                    </div>
                                                    <div id="projectBackEnd">
                                                        <li className="backend">
                                                            {
                                                                this.props.projects[this.props.selectedProjectIndex]
                                                                    .backend
                                                            }
                                                        </li>
                                                    </div>
                                                </ul>
                                                <p>
                                                    {
                                                        this.props.projects[this.props.selectedProjectIndex]
                                                            .shortDesc
                                                    }
                                                </p>
                                                <p>
                                                    {
                                                        this.props.projects[this.props.selectedProjectIndex]
                                                            .productPaper
                                                    }
                                                </p>
                                                <a
                                                    onClick={this.userClicksPrevious}
                                                    href={
                                                        this.props.projects[this.props.selectedProjectIndex]
                                                            .prevWebsiteLink
                                                    }
                                                    style={{
                                                        display:
                                                            this.props.projects[this.props.selectedProjectIndex]
                                                                .prevWebsiteLink != undefined
                                                                ? "block"
                                                                : "none"
                                                    }}
                                                    className="externalLinks"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                    <div id="prev-code-link">
                                                        <i
                                                            className="fas fa-external-link-alt fontIcon"
                                                            rgb="(0,0,0)"
                                                        >
                                                        </i>
                                                        See Previous Version of Website
                                         </div>
                                                </a>
                                            </div>
                                        </div>
                                    ) : (
                                            <div className="landingSubTitle">Front End Web Developer</div>
                                        )}
                                        */