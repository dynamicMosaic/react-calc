import React, { Component } from 'react';
import DisplayTop from "./DisplayTop";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calcuate"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
}

  handleClick = buttonName => {
    this.setstate(calculate(this.state, buttonName));
  };  

  render() {
    return (
      <div className="component-app">
        <DisplayTop value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    )
  }

}

export default App;
