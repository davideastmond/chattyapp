import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './notification.jsx';
import ImageMessage from './imagepicture.jsx';

// The list container for messages.
class MessageList extends Component {
  render () {
    /* Iterate through the list of Messages and populate the MessageList window. We have
    to determine if the incoming message is one with an imgURL. If so, we render an ImageMessage component
    instead of a regular message component
    */
    return (<div>
      {this.props.messagelist.map((element) => {
        if (element.type === "user_message") {
          // Regular user message - render a message object
          if (!element.msgData.imgURLData) {
            return <Message type={element.type} key={element.msgData.id} username={element.msgData.username} 
              content={element.msgData.content} textColor={element.msgData.color}></Message> 
          } else {
            return <ImageMessage key={element.msgData.id} 
              username={element.msgData.username} content={element.msgData.imgURLData.cleanText} textColor={element.msgData.color} imgSrc={element.msgData.imgURLData.imgsrc}>
            </ImageMessage>
          }
        } else if (element.type === "system_notification_name_change") {
          /* Special system notification that handles name change. Use string template to display a 
          user-friendly notification that has been broadcast from the server
          */
          const sysMessage = `${element.msgData.oldName} changed their name to ${element.msgData.newName}`
          return <Notification key={element.msgData.id} systemMessage={sysMessage} />
        }
        })}
    </div>);
  }
}
export default MessageList;