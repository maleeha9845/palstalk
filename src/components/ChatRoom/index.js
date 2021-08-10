import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';
import TextSectionHeader from './header.js';
import TextSectionFooter from './footer.js';
import TextSectionBody from './body.js';
import {MdSend} from 'react-icons/md';


class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	searchText: '',
      searchActive :false,
      editor: false,
      text : ''
    };
  
  }
  render(){
    	
      return(
      
        <div class = 'section-container'>

          <TextSectionHeader/>
          <TextSectionBody/> 
          <TextSectionFooter />
        </div>
    	)
  	}
 
}




export default ChatRoom;