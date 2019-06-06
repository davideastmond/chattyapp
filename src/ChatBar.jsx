import React, {Component} from 'react';

class Chatbar extends Component {
  constructor (props) {
    super (props)
    this.state = {currentUser: 'Annonymous'}
  }
  
  makeMessageObject = (edata) => {
    const messageObj = {
      username: this.state.currentUser,
      content: edata.target.value.trim(),
      imageurl: null
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
      // activate a function that propogates the username up to the app parent
      let changedUserName = e.target.value.trim();

      if (changedUserName === this.state.currentUser) {
        // The user hasn't changed their name - just pressed enter, so abort the function
        return;
      }

      if (changedUserName === "") {
        // If username is a null string, make it annonymous
        changedUserName = "Annonymous"
        e.target.value = changedUserName;
      }
      const userNameChangeDataObj = {
        oldName: this.state.currentUser,
        newName: changedUserName
      }

      this.setState({currentUser: changedUserName});
      // Call the function in props
      this.props.funcUpdateUsername(userNameChangeDataObj)
      
    }
    
  }
  render () {
    return (<footer className="chatbar">
      <input className="chatbar-username" onKeyPress={this.updateSender} placeholder={"Your Name (Optional)"} defaultValue= {this.props.currentUser} />
      <input className="chatbar-message" onKeyPress={this.handleChatMessageChange} placeholder="Type a message and hit ENTER" />
    </footer>);
  }
}

function extractImageURL(textLine) {
  /**Helper function that extracts the URL from the line of text the user
   * has typed. If there is no URL, then return null
  */

  const returnObj = {
    validURL: false,
    cleanString: "",
    imgsrc: ""
  }
  let indexOfURL;
  /* First make sure there is valid resource. If not, return the object
  with the appropriate values that indicate there are no image URLs, with the text
  */
  if (textLine.indexOf("https://") >= 0) {
    indexOfURL = textLine.indexOf("https://")
  } else if (textLine.indexOf("http://") >= 0) {
    indexOfURL = textLine.indexOf("http://")
  }

  if (indexOfURL < 0) {
    returnObj.cleanString = textLine.trim();
    return returnObj;
  }
  /** At this point, we have a URL. The next part, we have to discern
   * whether the resource is a valid image .png, .jpg or .gif
   */
}
export default Chatbar;