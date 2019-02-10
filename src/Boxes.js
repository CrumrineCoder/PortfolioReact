import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Boxes extends Component {

    constructor(props) {
        super(props);
     //   this.state = this.props;
        this.handleClick = this.handleClick.bind(this);
        this.changePreview = this.changePreview.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ projects: nextProps.projects });  
      }

    handleClick(idx) {
        this.props.handleProjectChange(idx);
    }

    changePreview(idx){
        this.props.handleProjectPreview(idx);
    }

    render() {
        return (
            <div id="projectSelectBoxes">
                {this.props.projects.map((project, idx) => (
                    <button type="image" style={{background: project.color}}  onMouseEnter={() => this.changePreview(idx)} value={idx} className="projectSelectButton" onClick={() => this.handleClick(idx)} value={idx} >
                        <img src={project.logo} className="projectSelectImage"  alt="Project Select" />
                        <p className="logoText">  {project.title} </p>
                    </button>
                ))}
            </div>
        )
    }
}

export default Boxes