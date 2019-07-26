
import React, { Component } from "react";

class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        var color = ""; 
        if(this.props.selectedProjectIndex != null){
            color = this.props.projects[this.props.selectedProjectIndex].color
        }
        return (
            <div style={{background: color}} className="recommendationContainer">
                <div  className="recommendationText" dangerouslySetInnerHTML={{ __html: this.props.text }} ></div>
            </div>
        );
    }
}

export default Recommendation;
