import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" clickHnadler={this.handleCLick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="7" clickHnadler={this.handleCLick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="x" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="4" clickHnadler={this.handleCLick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="1" clickHnadler={this.handleCLick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Button name="0" clickHnadler={this.handleCLick} />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} />
                </div>
                
                
                
                
                
            </div>
        )

    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func
}

export default ButtonPanel