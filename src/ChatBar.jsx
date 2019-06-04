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
      content: edata.target.value.trim(),
      id: rndCharGen.generateRandomId()
    }
    return messageObj;
  }

  handleChatMessageChange = (e) => {
    // Handles when user types presses enter. 
    // Create a chat message object and sent it up to the parent
    if (e.key === 'Enter') {
      const obj = this.makeMessageObject(e);
      this.props.funcUpdateChatMessage(obj);
      e.target.value = "";
    }
  }
  updateSender = (e) => {
    // Update the state currentUser state property when a user types a name into the username box
    this.setState({currentUser: e.target.value.trim()})
    
  }
  render () {
    return (<footer className="chatbar">
      <input className="chatbar-username" onChange={this.updateSender} placeholder={"Your Name (Optional)"} defaultValue= {this.props.currentUser} />
      <input className="chatbar-message" onKeyPress={this.handleChatMessageChange} placeholder="Type a message and hit ENTER" />
    </footer>);
  }
}
export default Chatbar;