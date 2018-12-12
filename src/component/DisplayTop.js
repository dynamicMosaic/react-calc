import React from "react";
import PropTypes from "prop-types";

import "./DisplayTop.css";

class DisplayTop extends React.Component {
    render() {
        return (
            <div className="component-display">
            
            <div>{this.props.value}</div>
            </div>
        );
    }
}
DisplayTop.propTypes = {
    value: PropTypes.string,
};

export default DisplayTop;
