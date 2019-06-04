import React, { Component } from "react";

class ProjectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //this.state = this.props;
    }

    render() {
        return (
            <button
                key={this.props.idx}
                type="image"
                style={{ background: this.props.project.color }}
                className="landingBox"
                onMouseOver={() => this.props.handleClick(this.props.idx)}
            >
                <div
                    className="landingBoxInner"
                    style={{ backgroundImage: `url(${this.props.project.logo})` }}
                >
                    <a
                        href={this.props.project.codeLink}
                        className={
                            this.props.project.caseStudyLink === undefined
                                ? "landingBoxExternalLink landingBoxExternalLink2"
                                : "landingBoxExternalLink landingBoxExternalLink3"
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                        disabled={this.props.noProjectSelected}
                    >
                        <li
                           className={this.props.noProjectSelected ? (this.props.project.class + "Pill hiddenLink") : (this.props.selectedProjectIndex == this.props.idx ? (this.props.project.class+"Pill") : (this.props.project.class + "Pill hiddenLink"))}
                            id="code-link"
                        >
                            <div>
                                <i className="fas fa-code fontIcon" />See Code
                            </div>
                        </li>
                    </a>
                    <a
                        href={this.props.project.websiteLink}
                        className={
                            this.props.project.caseStudyLink === undefined
                                ? "landingBoxExternalLink landingBoxExternalLink2"
                                : "landingBoxExternalLink landingBoxExternalLink3"
                        }
                        rel="noopener noreferrer"
                        target="_blank"
                        disabled={this.props.noProjectSelected}
                    >
                        <li
                            className={this.props.noProjectSelected ? (this.props.project.class + "Pill hiddenLink") : (this.props.selectedProjectIndex == this.props.idx ? (this.props.project.class+"Pill") : (this.props.project.class + "Pill hiddenLink"))}
                            id="website-link"
                        >
                            <div>
                                <i className="fas fa-external-link-alt fontIcon" />
                                Visit Website
                            </div>
                        </li>
                    </a>
                    {this.props.project.caseStudyLink !== undefined && (
                        <a
                            href={this.props.project.caseStudyLink}
                            className={
                                this.props.project.caseStudyLink === undefined
                                    ? "landingBoxExternalLink landingBoxExternalLink2"
                                    : "landingBoxExternalLink landingBoxExternalLink3"
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                            disabled={this.props.noProjectSelected}
                        >
                            <li
                                className={this.props.noProjectSelected ? (this.props.project.class + "Pill hiddenLink") : (this.props.selectedProjectIndex == this.props.idx ? (this.props.project.class+"Pill") : (this.props.project.class + "Pill hiddenLink"))}
                                
                                id="case-link"
                            >
                                <div>
                                    <i className="fas fa-book-open fontIcon" />Case Study
                                </div>
                            </li>
                        </a>
                    )}
                </div>
            </button>
        );
    }
}//style={{ background: this.props.project.color }}

export default ProjectBox;