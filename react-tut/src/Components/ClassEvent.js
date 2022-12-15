import React, { Component } from "react";

class ClassEvent extends Component {
  handleClick = () => {
    console.log(`Class Based Event Handling`);
  };

  render() {
    return (
      <div>
        Class based component
        <button onClick={this.handleClick}>Class</button>
      </div>
    );
  }
}

export default ClassEvent;
