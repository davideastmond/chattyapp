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
    // Process the user input triggered by the child event and sets a new state
    console.log("App update chat message ", messageData);
    const messages = this.state.messagelist.concat(messageData)
    this.setState({messagelist: messages});
    
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
}
export default App;
