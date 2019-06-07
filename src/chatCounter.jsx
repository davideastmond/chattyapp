import React, {Component} from 'react';
/**
 * This is the component that will be rendered to the nav bar, which displays
 * the count of the users connected to the server
 */
class ChatCounter extends Component {
  render() {
    return <div>
        <p className="counter">{this.props.userCount} user(s) online.</p>
      </div>
    }
}

export default ChatCounter;