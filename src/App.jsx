import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from  './Messagelist.jsx';
import ChatCounter from './chatCounter.jsx';

class App extends Component {
  constructor () {
    super ()
    this.state = { messagelist: [],
                    currentUser: 'Annonymous'}
  }
  updateCurrentUserName = (data) => {
    // This function to be passed down in props to the username input text field
    // data should be an object with {oldName, newName}
    console.log(data.oldName, "changed their name to", data.newName)
    
    const formattedData = this.createClientMessage("client_name_change_notification", data);
    this.socket.send(formattedData);
  }
  updateChatMessage = (messageData) => {
    // Process the user input triggered by the child event and send the data to the server
    // Here is where we want to send the data to the server
    const formattedData = this.createClientMessage("user_message", messageData);
    this.socket.send(formattedData);
  }

  getMessageFromServer = (messageData) => {
    /* Get the message data from the server, parse it and
     Determine the message type and determine how to display it */
    const parsedData = JSON.parse(messageData);

    if (parsedData.type === "user_message") {
      const messages = this.state.messagelist.concat(parsedData);
      this.setState({messagelist: messages});
    } else if (parsedData.type === "system_notification_name_change") {
      console.log("LINE 35 SYSTEM NOTIFICATION ", parsedData )
      const messages = this.state.messagelist.concat(parsedData);
      this.setState({messagelist: messages});
    }
  }

  componentDidMount () {
    this.socket = new WebSocket('ws://0.0.0.0:3001/');

    this.socket.onopen = () => {
      console.log("Connected to server.");
    }
    
    this.socket.onmessage = e => {
      // Display the message on the client
      this.getMessageFromServer(e.data)
    }
  }

  render() {
    return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a> 
          <ChatCounter />
        </nav>
          <MessageList messagelist= {this.state.messagelist}/>
        <Chatbar currentUser={this.state.currentUser} funcUpdateChatMessage={this.updateChatMessage} funcUpdateUsername={this.updateCurrentUserName}/>
      </div>
    );
  }

  createClientMessage(type, msgData) {
    // Creates and serializes message data to send to the server 
    const objToReturn = {
      type,
      msgData
    }

    return JSON.stringify(objToReturn);
  }
}
export default App;
