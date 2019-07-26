
import React, { Component } from "react";
import { throws } from "assert";

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
        /*
        </div>
            <div style={{background: color}} className="recommendationContainer">
            */
        return (
            <div className={
                !this.props.noProjectSelected
                    ? this.props.projects[this.props.selectedProjectIndex].class +
                    "Dark recommendationContainer"
                    : "recommendationContainer"
            }>
                <i class="fas fa-quote-left recommendationQuoteIcon"></i>
                <div  className="recommendationText" dangerouslySetInnerHTML={{ __html: this.props.text }} ></div>
                <div className="recommendationFooter">
                    <img className="recommendationFooterImage" src={this.props.image} />
                    <div className="recommendationFooterText">
                       <p className="recommendatonFooterName">{this.props.name}</p>
                       <p className="recommendationFooterCompany">{this.props.role} at {this.props.company}</p>
                    </div>      
                </div>
            </div>
        );
    }
}

export default Recommendation;
