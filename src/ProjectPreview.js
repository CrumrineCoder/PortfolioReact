import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Project extends Component {

    constructor(props) {
        super(props);
        //this.state = this.props;
        this.state = { 
            currentProject: this.props, 
            hiddenOverlay: true 
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentProject: nextProps });
    }

    render() {
        return (
            <>
                <div id="overlay" className="hiddenOverlay" style={{ display: this.state.hiddenOverlay ? 'block' : 'none' }}>
                    <button id="toggleOverlayButton" onClick={this.toggleOverlay}>
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
            </>
        )
    }
}

export default Project;
