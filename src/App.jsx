import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from  './Messagelist.jsx';
import ChatCounter from './chatCounter.jsx';

class App extends Component {
  constructor () {
    super ()
    this.state = { messagelist: [],
                    currentUser: 'Annonymous',
                    userCount: 0}
  }
  updateCurrentUserName = (data) => {
    // This function is passed down in props to the username input text field
    // data should be an object with {oldName, newName}
    const formattedData = this.createClientMessage("client_name_change_notification", data);
    this.socket.send(formattedData);
  }

  updateChatMessage = (messageData) => {
    // Process the user input triggered by the child event and send the data to the server
    // Here is where we want to send the data to the server
    const formattedData = this.createClientMessage("user_message", messageData);
    this.socket.send(formattedData);
  }

  updateUserCount = (countData) => {
    /* This function is going to be called when the server sends
    the client an updated count of the users online */
    this.setState({userCount: countData });
  }

  getMessageFromServer = (messageData) => {
    /* Get the message data from the server, parse it and
     Determine the message type and determine how to display it 
     It can be a user message or some kind of system notification */
    const parsedData = JSON.parse(messageData);

    if (parsedData.type === "user_message") {
      /* If it's a user message, we have to determine if it's a special message
      that contains a link to a valid image */
      const messages = this.state.messagelist.concat(parsedData);
      this.setState({messagelist: messages});

    } else if (parsedData.type === "system_notification_name_change") {
      const messages = this.state.messagelist.concat(parsedData);
      this.setState({messagelist: messages});

    } else if (parsedData.type === "system_notification_user_count") {
      console.log("Received a user count system message", parsedData);
      this.updateUserCount(parsedData.count);
    }
  }

  /* The web app connects immediately upon mounting */
  componentDidMount () {
    this.socket = new WebSocket('ws://0.0.0.0:3001/');

    this.socket.onopen = () => {
      console.log("Connected to server.");
    }
    
    this.socket.onmessage = e => {
      // Call a function that handles messages sent to client from server
      this.getMessageFromServer(e.data)
    }
  }

  render() {
    return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a> 
          <ChatCounter userCount={this.state.userCount}/>
        </nav>
          <MessageList messagelist= {this.state.messagelist}/>
        <Chatbar currentUser={this.state.currentUser} funcUpdateChatMessage={this.updateChatMessage} funcUpdateUsername={this.updateCurrentUserName}/>
      </div>
    );
  }

  createClientMessage(type, msgData) {
    // Helper function: creates and serializes message data to send to the server 
    const objToReturn = {
      type,
      msgData
    }

    return JSON.stringify(objToReturn);
  }
}
export default App;
