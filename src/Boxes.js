import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Boxes extends Component {

    constructor(props) {
        super(props);
     //   this.state = this.props;
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ projects: nextProps.projects });  
      }

    handleClick() {
        this.props.handleProjectChange(1);
    }

    render() {
        console.log(this.props);
        return (
            <div id="projectSelectBoxes">
                {this.props.projects.map((project, idx) => (
                    <button type="image" className="projectSelectButton" onClick={this.handleClick} >
                        <img src={project.logo} className="projectSelectImage" ng-style="{'background-color': project.color}" alt="Project Select" />
                        <p className="logoText">  {project.title} </p>
                    </button>
                ))}
            </div>
        )
    }
}

export default Boxes