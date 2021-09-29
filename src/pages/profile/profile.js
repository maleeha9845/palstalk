import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import ChatProfile from '../../components/chatProfile/index.js';
import alt from '../../components/alt.png';
import '../settings/setting.css';
import InputField from '../../components/inputField/index.js';



class ProfileSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }
 
  onClick(history){
    history.push('/login')
    }

  render(){
    	return(
    	 <div class = 'setting-main-container'>
          <div class = 'setting-body'>
          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

            <div class ='createRoom-tittle'>Profile setting </div>

            <InputField tittle = 'Edit User Name ' placeholder = 'enter new user name...' type = 'text'/>
            <InputField tittle = 'Edit Prifile Picture' placeholder = 'add Profile...' type = 'text'/>
            <InputField tittle = 'Edit Password' placeholder = 'enter new password...' type = 'password'/>

            
              <div class = 'create' >save</div>

              <div class = 'logout' onClick = {()=> this.onClick(this.props.history)}>LogOut</div>
            

          </div>  
	     </div>
    	)
  	}
}

export default withRouter(ProfileSetting);