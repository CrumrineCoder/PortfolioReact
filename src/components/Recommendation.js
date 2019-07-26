
import React, { Component } from "react";

class Recommendation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.props.text }} ></div>

            </div>
        );
    }
}

export default Recommendation;
