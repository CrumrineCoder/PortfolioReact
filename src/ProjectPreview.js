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

    toggleOverlay() {
        this.setState({ hiddenOverlay: !this.state.hiddenOverlay });
        ReactGA.event({
            category: 'Project',
            action: 'Toggle Preview'
        });
    }

    render() {
        return (
            <div id="overlayContainer">
                <ul style={{ display: this.state.hiddenOverlay ? 'block' : 'none',  background: this.state.currentProject.color }} className="previewUL">
               
                    <div id="overlayFrontEnd">
                        <li className="frontend">  {this.state.currentProject.frontend} </li>
                    </div>
                    <div id="overlayBackEnd">
                        <li className="backend">  {this.state.currentProject.backend} </li>
                    </div>
                </ul>
                <button className="toggleOverlayButton" onClick={this.toggleOverlay} style={{ display: this.state.hiddenOverlay ? 'block' : 'none' }}>
                    <i id="toggleOverlayButtonIcon" className="fas fa-chevron-down"></i>
                </button>
                <button id="toggleOverlayButtonClosed" className="toggleOverlayButton" onClick={this.toggleOverlay} style={{ display: this.state.hiddenOverlay ? 'none' : 'block' }}>
                        <i id="toggleOverlayButtonIcon" className="fas fa-chevron-up"></i>
                </button> 
            </div>
        )
    }
}
/*         <img src={this.state.currentProject.logo} className="previewLogo"/>    <div id="overlay" className="hiddenOverlay" style={{ display: this.state.hiddenOverlay ? 'block' : 'none' }}>
                     <h4><i>Project Technology Hover Preview</i></h4>
                    <div id="overlayText" className="shownOverlay">
                    
                        <h1 id="overlayTitle"> {this.state.currentProject.title}  </h1>
                      
                        <h3>Click on the Project Icon to learn more!</h3>
                    </div>
                </div>
                <button id="toggleOverlayButtonClosed" className="toggleOverlayButton" onClick={this.toggleOverlay} style={{ display: this.state.hiddenOverlay ? 'none' : 'block' }}>
                        <i id="toggleOverlayButtonIcon" className="fas fa-chevron-up"></i>
                </button> */
export default Project;
