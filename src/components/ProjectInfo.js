
import React, { Component } from "react";
//import { Spring } from 'react-spring/renderprops';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

class ProjectInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //this.state = this.props;
    }

    render() {
        let child = (
            <div key={this.props.selectedProjectIndex} className="landingTitleBody">
                <div className="landingTitle">
                    {this.props.selectedProjectIndex !== null
                        ? this.props.projects[this.props.selectedProjectIndex].projectName
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
                                            .prevWebsiteLink !== undefined
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
            </div>
        )
    return(
            <ReactCSSTransitionGroup
                transitionName = "projectInfo"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
              {child}
            </ReactCSSTransitionGroup>
        );
    }
}

export default ProjectInfo;

/*
               <div key={this.props} className="landingTitleBody">
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
                </div>
                )
                }
                */