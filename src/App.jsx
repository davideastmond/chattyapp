import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';
import MessageList from  './Messagelist.jsx';

const msgDB = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

class App extends Component {
  constructor () {
    super ()
    this.state = { messagelist: msgDB.messages,
                    currentUser: 'Bob'}
  }
  render() {
    return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a> 
        </nav>
          <MessageList messagelist= {this.state.messagelist}/>
        <Chatbar currentUser={this.state.currentUser}/>
      </div>
    );
  }
}
export default App;
