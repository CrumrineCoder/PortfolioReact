import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';

class projectCarousel extends Component {

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
        ReactGA.event({
            category: 'Box',
            action: this.props.projects[idx].title
        });
    }

    changePreview(idx) {
        this.props.handleProjectPreview(idx);
    }

    initializeReactGA() {
        ReactGA.initialize('UA-114290573-1');
        ReactGA.pageview('/homepage');
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

export default projectCarousel;