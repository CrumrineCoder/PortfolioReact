import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Boxes extends Component {

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        console.log(this.props);
        return (
            <div id="projectSelectBoxes">
                 {this.props.projects.map((project, idx) => (
                <button type="image" className="projectSelectButton" id="" ng-click="changeProject(project.id)"
                    ng-mouseover="changePreview(project.id)" ng-style="{'background-color': project.color}" ng-repeat="project in buttons">
                    <img src={project.logo} className="projectSelectImage" ng-style="{'background-color': project.color}" alt="Project Select" />
                    <p className="logoText">  {project.title} </p>
                </button>
                 ))}
            </div>
        )
    }
}

export default Boxes