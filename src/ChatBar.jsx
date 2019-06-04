import React, {Component} from 'react';

class Chatbar extends Component {
  constructor (props) {
    super (props)
    this.state = {currentUser: 'Annonymous'}
  }
  
  handleChatMessageChange = (e) => {
    // Handles when user types presses enter. 
    // Create a chat message object and sent it up to the parent
    if (e.key === 'Enter') {
      console.log()
      this.props.funcUpdateChatMessage();
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