import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import ChatRoomList from '../../components/ChatRoomList/index.js'
import ChatRoom from '../../components/ChatRoom/index.js';

import './chatRoom.css';



class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	activePage : 'messages',
    };
  
  }

  render(){
    	return(
    		<div class = 'chatRoom-main-container'>
          <ChatRoomList/>

          <div class = 'chatRoom-chat-container'>
          <ChatRoom/>
          </div>
          
	    	</div>
    	)
  	}
}

export default withRouter(DashBoard);