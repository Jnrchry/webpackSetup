import React, { Component } from "react";

class Classstate extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleClickDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter} </h3>
        <button onClick={() => this.handleClick()}>Click</button>
        <button onClick={() => this.handleClickDecrement()}>Click</button>
      </div>
    );
  }
}

export default Classstate;
