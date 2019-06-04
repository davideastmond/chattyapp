import React, {Component} from 'react';

// This holds an actual message, which contains the username and the message
// body
class Message extends Component {
  constructor() {
    super (props);

    this.state = {
      username: null,
      messagebody: null
    }
  }

  render () {
    return <div className="message">
      <span className="message-username">Anonymous1</span>
    <span className="message-content">I won't be impressed with technology until I can download food.</span>
    </div>
  }
}