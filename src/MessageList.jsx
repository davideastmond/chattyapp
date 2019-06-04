import React, {Component} from 'react';
import Message from './Message.jsx';

// The list container for messages.
class MessageList extends Component {
  render () {
    // Iterate through the list of Messages and populate the MessageList window
    return (<div>
      {this.props.messagelist.map((element) => {
        return <Message key={element.id} username= {element.username} content= {element.content}></Message>
      })}
    </div>);
  }
}
export default MessageList;