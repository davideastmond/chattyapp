import React, {Component} from 'react';
import Message from './Message.jsx';

// The list container for messages.
class MessageList extends Component {
  constructor() {
    super ()
    this.state = { messageArray: []};
  }

  render () {
    return (<div>
      <p> Message </p>
    </div>);
  }
}
export default MessageList;