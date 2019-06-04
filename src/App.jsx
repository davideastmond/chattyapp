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
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: "3", username: "Michelle", content: "Hello there!"};
      const messages = this.state.messagelist.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messagelist: messages });
    }, 3000);
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
