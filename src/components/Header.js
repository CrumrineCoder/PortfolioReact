
import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: "Images\\profileNicMay2019.jpg",
        }
        //this.state = this.props;
    }

    render() {
        return (
            <div className="landingNav">
                <div className="landingNavLeftHandContainer">
                    <img
                        className="landingNavProfileImage"
                        src={this.state.profile}
                        alt="ProfilePicture"
                    />
                    {this.props.selectedProjectIndex}
                    {this.props.selectedProjectIndex !== null ? (
                        <h2 className="landingNavProfileName">Nicolas Crumrine</h2>
                    ) : (
                            <h2 className="landingNavProfileName" />
                        )}
                </div>

                {this.props.selectedProjectIndex !== null ? (
                    <div className="landingNavRightHandContainer">
                        <a
                            href="https://nicolascrumrine.com/#/about"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={
                                this.props.projects[this.props.selectedProjectIndex].class +
                                " landingNavItem"
                            }
                        >
                            About
                </a>
                        <a
                            href="https://github.com/CrumrineCoder"
                            id="github"
                            title="Github"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={
                                this.props.projects[this.props.selectedProjectIndex].class +
                                " landingNavItem"
                            }
                        >
                            <i className="fab fa-github" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/"
                            title="link"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={
                                this.props.projects[this.props.selectedProjectIndex].class +
                                " landingNavItem"
                            }
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            href="mailto:crumrinecoding@gmail.com"
                            title="Email"
                            rel="noopener noreferrer"
                            className={
                                this.props.projects[this.props.selectedProjectIndex].class +
                                " landingNavItem"
                            }
                        >
                            <i className="fas fa-envelope" />
                        </a>
                    </div>
                ) : (
                        <div className="landingNavRightHandContainer">
                            <a
                                href="https://nicolascrumrine.com/#/about"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="landingNavItem"
                            >
                                About
                </a>
                            <a
                                href="https://github.com/CrumrineCoder"
                                id="github"
                                title="Github"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="landingNavItem"
                            >
                                <i className="fab fa-github" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nicolas-crumrine-50899b120/"
                                title="link"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="landingNavItem"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a
                                href="mailto:crumrinecoding@gmail.com"
                                title="Email"
                                rel="noopener noreferrer"
                                className="landingNavItem"
                            >
                                <i className="fas fa-envelope" />
                            </a>
                        </div>
                    )}
            </div>
        );
    }
}

export default Header;
