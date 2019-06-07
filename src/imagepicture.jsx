import React, {Component} from 'react';

// This holds an actual message, which contains the username and the message
// body. It also supports one image included in the text
class MessageWithImage extends Component {
  render () {
    console.log("Message RENDERED line 7 PROPS", this.props.imageSrc);
    return <div className="message">
      <span className="message-username" style={{color: this.props.textColor }}>{this.props.username}</span>
      <span className="message-content">{this.props.content} <br></br>
      <img className="message-content-image" src={this.props.imgSrc}/>
      
      </span>
    </div>
  }
}

export default MessageWithImage;