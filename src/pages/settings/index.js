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

  onClick(history){
    history.push('/profile')
    }

  render(){
    	return(
    		<div class = 'setting-main-container'>
          <div class = 'setting-body'>

            <div class ='createRoom-tittle'> Room Setting </div>

            <InputField tittle = 'Enter new Name ' placeholder = 'enter new room name...' type = 'text'/>
            <div class = 'options' >change room name</div>
            <div  class = 'options' >delete chat</div>
            <div class = 'options' >clear chat</div>
            <div class = 'options' onClick = {()=> this.onClick(this.props.history)}>profile</div>
            <div class = 'options' >leave room</div>
            {/* <div class = 'options' >save</div> */}
  

          </div>  
	    	</div>
    	)
  	}
}

export default withRouter(SettingPage);