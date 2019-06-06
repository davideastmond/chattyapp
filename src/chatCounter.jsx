import React, {Component} from 'react';
/**
 * This is the component that will be rendered to the nav bar, which keeps
 * track of the user count
 */
class ChatCounter extends Component {
  render() {
    return <div>
        <p className="counter">Users Online</p>
      </div>
    }
}

export default ChatCounter;