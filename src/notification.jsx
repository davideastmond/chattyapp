// Handles notifications
import React, {Component} from 'react';

// This holds an actual message, which contains the username and the message
// body
class Notification extends Component {
  
  render () {
    return <div className="notification">
      <span className="notification-content">{this.props.content}</span>
      
    </div>
  }
}

export default Notification;