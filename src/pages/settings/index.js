import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './setting.css';
import InputField from '../../components/inputField/index.js';



class SettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  render(){
    	return(
    		<div class = 'setting-main-container'>
          <div class = 'setting-body'>

            <div class ='createRoom-tittle'>Profile setting </div>

            <InputField tittle = 'Edit User Name ' placeholder = 'enter new user name...' type = 'text'/>
            <InputField tittle = 'Edit Prifile Picture' placeholder = 'add Profile...' type = 'text'/>
            <InputField tittle = 'Edit Password' placeholder = 'enter new password...' type = 'password'/>

            
              <div class = 'create' >save</div>

              <div class = 'logout'>LogOut</div>
            

          </div>  
	    	</div>
    	)
  	}
}

export default withRouter(SettingPage);