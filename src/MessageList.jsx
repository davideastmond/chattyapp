import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './notification.jsx'

// The list container for messages.
class MessageList extends Component {
  render () {
    // Iterate through the list of Messages and populate the MessageList window
    return (<div>
      {this.props.messagelist.map((element) => {
        if (element.type === "user_message") {
          // Regular user message - render a message object
          return <Message type={element.type} key={element.msgData.id} username= {element.msgData.username} 
          content= {element.msgData.content} textColor={element.msgData.color}></Message>
        } else if (element.type === "system_notification_name_change") {
          // Special system notification - render a notification-type
          const sysMessage = `${element.msgData.oldName} changed their name to ${element.msgData.newName}`
          return <Notification key={element.msgData.id} systemMessage={sysMessage} />
        }
        })}
    </div>);
  }
}
export default MessageList;