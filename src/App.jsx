import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';

class App extends Component {
  render() {
    return (<div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a> 
        </nav>
        <div className="messages">
          
        </div>
        <Chatbar/>
      </div>
    );
  }
}
export default App;
