import React, {Component} from 'react';
import Message from './Message.jsx';

// The list container for messages.
class MessageList extends Component {
  render () {
    // Iterate through the list of Messages and populate the MessageList window
    return (<div>
      {this.props.messagelist.map((element) => {
        if (element.type === "user_message") {
          return <Message type={element.type} key={element.msgData.id} username= {element.msgData.username} 
          content= {element.msgData.content}></Message>
        }
        })}
    </div>);
  }
}
export default MessageList;