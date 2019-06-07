import React, {Component} from 'react';

// This holds an actual message, which contains the username and the message
// body
class MessageWithImage extends Component {
  render () {
    return <div className="message">
      <span className="message-username" style={{color: this.props.textColor }}>{this.props.username}</span>
      <span className="message-content">{this.props.content}</span>
      <img className="message-content-image" src={this.props.src}></img>
    </div>
  }
}

export default MessageWithImage;