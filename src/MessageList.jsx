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
    // Iterate through the list of Messages and populate the MessageList window
    return (<div>
      {this.state.messageArray.map((element) => {
        return <Message key={element.id} username= {element.username} content= {element.content}></Message>
      })}
    </div>);
  }
}
export default MessageList;