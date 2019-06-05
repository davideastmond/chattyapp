import React, {Component} from 'react';
const rndCharGen = require('./utils');
class Chatbar extends Component {
  constructor (props) {
    super (props)
    this.state = {currentUser: 'Annonymous'}
  }
  
  makeMessageObject = (edata) => {
    const messageObj = {
      username: this.state.currentUser,
      content: edata.target.value.trim()
    }
    return messageObj;
  }

  handleChatMessageChange = (e) => {
    // Handles when user types presses enter. 
    // Create a chat message object and sent it up to the parent through the delegate method
    if (e.key === 'Enter' && e.target.value.trim() !== "") {
      const obj = this.makeMessageObject(e);
      this.props.funcUpdateChatMessage(obj);
      e.target.value = "";
    }
  }
  // EVENT HANDLER for when user changes their name
  updateSender = (e) => {
    // Update the state currentUser state property when a user types a name into the username box
    if (e.key ==='Enter') {
      // activate a function that propogates the username
    }
    
  }
  render () {
    return (<footer className="chatbar">
      <input className="chatbar-username" onKeyPress={this.updateSender} placeholder={"Your Name (Optional)"} defaultValue= {this.props.currentUser} />
      <input className="chatbar-message" onKeyPress={this.handleChatMessageChange} placeholder="Type a message and hit ENTER" />
    </footer>);
  }
}
export default Chatbar;