import React, {Component} from 'react';

// This holds an actual message, which contains the username and the message
// body
class Message extends Component {
  constructor(props) {
    super (props);

    this.state = {
      type: "incomingMessage",
      username: this.props.username,
      messagebody: this.props.content
    }
  }

  render () {
    return <div className="message">
      <span className="message-username">{this.state.username}</span>
      <span className="message-content">{this.state.messagebody}</span>
    </div>
  }
}

export default Message;