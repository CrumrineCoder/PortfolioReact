import React, { Component } from "react";

import ProjectBox from "../components/ProjectBox.js";

class ProjectBoxesContainer extends Component {
    
    render() {
        return (
            <div
                className={
                    !this.props.noProjectSelected
                        ? this.props.projects[this.props.selectedProjectIndex].class +
                        "Bar landingBoxesContainer customScrollBar"
                        : "landingBoxesContainer customScrollBar"
                }
            >
                {this.props.projects.map((project, idx) => (
                    <ProjectBox
                        selectedProjectIndex={this.props.selectedProjectIndex}
                        project={project}
                        noProjectSelected={this.props.noProjectSelected}
                        idx={idx}
                        handleClick={this.props.handleClick}
                        key={idx}
                        >
                    </ProjectBox>
                ))}
            </div>

        );
    }
}

export default ProjectBoxesContainer;