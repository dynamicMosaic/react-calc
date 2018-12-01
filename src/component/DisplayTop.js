import React from "react";
import PropTypes from "prop-types";

// import "./Display.css";

class DisplayTop extends React.Component {
    render() {
        return (
            <div className="component-display">
            
            <div>{this.props.value}</div>
            </div>
        );
    }
}
DisplayTop.PropTypes = {
    value: PropTypes.string,
};

export default DisplayTop;
