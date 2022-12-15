import React, { Component } from "react";

class Message extends Component {
  render() {
    const { messagecontent } = this.props;
    return (
      <div>
        <h1>Hi am a class component</h1>
        {messagecontent}
      </div>
    );
  }
}

export default Message;
