import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Boxes extends Component {

    constructor(props) {
        super(props);
        //   this.state = this.props;
        this.state = {
            selectedProjectIndex: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.changePreview = this.changePreview.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ projects: nextProps.projects, selectedProjectIndex: nextProps.currentProjectIndex });
    }

    handleClick(idx) {
        this.props.handleProjectChange(idx);
        this.setState({ selectedProjectIndex: idx });
    }

    changePreview(idx) {
        this.props.handleProjectPreview(idx);
    }

    render() {
        return (
            <div id="projectSelectBoxes">
                {this.props.projects.map((project, idx) => (
                    <button
                        key={idx}
                        type="image"
                        style={{ background: project.color, opacity: this.state.selectedProjectIndex == idx ? '.5' : '1' }}
                        onMouseEnter={() => this.changePreview(idx)}
                        className="projectSelectButton"
                        onClick={() => this.handleClick(idx)}
                    >
                        <img src={project.logo} className="projectSelectImage" alt="Project Select" />
                        <p className="logoText">  {project.title} </p>
                    </button>
                ))}
            </div>
        )
    }
}

export default Boxes