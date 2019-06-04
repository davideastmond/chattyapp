import React, {Component} from 'react';
import Message from './Message.jsx';

// The list container for messages.
class MessageList extends Component {
  constructor(props) {
    // MessageList is constructed with the messages from the parent container (the app)
    super (props)
    const listOfMessages = this.props.messagelist;
    this.state = { messageArray: listOfMessages };
    
  }

  render () {
    return (<div>
      <p> Message </p>
    </div>);
  }
}
export default MessageList;