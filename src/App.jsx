import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from  './Messagelist.jsx';

const msgDB = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
      id: 'RB5'
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      id: 'AB1'
    }
  ]
}

class App extends Component {
  constructor () {
    super ()
    this.state = { messagelist: msgDB.messages,
                    currentUser: 'Annonymous'}
  }

  updateChatMessage = (messageData) => {
    // Process the user input triggered by the child event and send the data to the server
    console.log("App update chat message ", messageData);

    // Here is where we want to send the data to the server
    const formattedData = this.createClientMessage("user_message", messageData);
    this.socket.send(formattedData);
    /*
    
    Then we get this data back from server
    const messages = this.state.messagelist.concat(messageData)
    this.setState({messagelist: messages}); */
    
  }
  componentDidMount () {
    
    this.socket = new WebSocket('ws://0.0.0.0:3001/');

    this.socket.onopen = () => {
      console.log("Connected to server.");
    }
  }

  render() {
    return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a> 
        </nav>
          <MessageList messagelist= {this.state.messagelist}/>
        <Chatbar currentUser={this.state.currentUser} funcUpdateChatMessage={this.updateChatMessage}/>
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
