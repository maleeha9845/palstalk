import React from 'react';
import ReactDOM from 'react-dom';
import './chat.css';
import SearchBarDiv from '../searchBar/index.js';
import ChatList from '../chatList/index.js';


class ChatRoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    	return(
    	 <div class = 'message-child-1'>
       <p class = 'user-name'> User Name </p>
        <SearchBarDiv />
        <ChatList/>
       </div>

    	)
  	}
}

export default ChatRoomList;