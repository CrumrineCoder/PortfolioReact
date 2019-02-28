import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';

class Project extends Component {

    constructor(props) {
        super(props);
        //this.state = this.props;
        this.state = { 
            currentProject: this.props, 
            hiddenOverlay: true 
        }
        this.toggleOverlay = this.toggleOverlay.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentProject: nextProps });
    }

    toggleOverlay(){
        this.setState({ hiddenOverlay: !this.state.hiddenOverlay });
        ReactGA.event({
            category: 'Project',
            action: 'Toggle Preview'
        });
    }

    render() {
        return (
            <>
                <div id="overlay" className="hiddenOverlay" style={{ display: this.state.hiddenOverlay ? 'block' : 'none' }}>
                    <button className="toggleOverlayButton" onClick={this.toggleOverlay}>
                        <i id="toggleOverlayButtonIcon" className="fas fa-chevron-down"></i>
                    </button>
                    <div id="overlayText" className="shownOverlay">
                        <h4><i>Project Hover Preview</i></h4>
                        <h1 id="overlayTitle"> {this.state.currentProject.title}  </h1>
                        <ul>
                            <div id="overlayFrontEnd">
                                <li className="frontend">  {this.state.currentProject.frontend} </li>
                            </div>
                            <div id="overlayBackEnd">
                                <li className="backend">  {this.state.currentProject.backend} </li>
                            </div>
                        </ul>
                        <h3>Click on the Project Icon to learn more!</h3>
                    </div>
                </div>
                <button id="toggleOverlayButtonClosed" className="toggleOverlayButton" onClick={this.toggleOverlay} style={{ display: this.state.hiddenOverlay ? 'none' : 'block' }}>
                        <i id="toggleOverlayButtonIcon" className="fas fa-chevron-up"></i>
                </button>
            </>
        )
    }
}

export default Project;
