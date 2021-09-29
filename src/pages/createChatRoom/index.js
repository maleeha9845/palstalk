import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './createRoom.css';
import InputField from '../../components/inputField/index.js';



class CreateChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  onClick(history){
    history.push('/dash')
    }
    
  render(){
    	return(
    		<div class = 'createRoom-main-container'>
          <div class = 'createRoom-body'>

            <div class ='createRoom-tittle'>Create New Room </div>

            <InputField tittle = 'Email ' placeholder = 'enter your email...' type = 'text'/>
            <InputField tittle = 'Chat Room Name' placeholder = 'enter room name...' type = 'text'/>
            <InputField tittle = 'Create Password' placeholder = 'enter new password...' type = 'password'/>

            
              <div class = 'create' onClick = {()=> this.onClick(this.props.history)}>Create</div>
            

          </div>  
	    	</div>
    	)
  	}
}

export default withRouter(CreateChatRoom);