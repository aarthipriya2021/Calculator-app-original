import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    console.log('handleClick - buttonName = ',buttonName);
    console.log('handleClick - typed = ',this.state);
    console.log('handleClick - Calculate(typed, buttonName) = ',calculate(this.state, buttonName));
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    let displayText = this.state.next || this.state.total || this.state.operation || "0";
    console.log('App.js - displayText = ',displayText);
    return (
      <div className="component-app">
        <Display value={displayText} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
