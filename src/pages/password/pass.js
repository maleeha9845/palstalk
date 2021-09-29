import  {connect} from 'react-redux';
import React, { Component } from 'react';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";


import './pass.css';
import InputField from '../../components/inputField/index.js';



class RoomLogin extends React.Component {
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
    		<div class = 'setting-main-container'>
          <div class = 'pass-body'>

            <div class ='createRoom-tittle'> Room Password </div>

            <InputField tittle = 'Enter Password ' placeholder = 'password...' type = 'text'/>
            
            <div class = 'options' onClick = {()=> this.onClick(this.props.history)}>Enter</div>
            

          </div>  
	    	</div>
    	)
  	}
}

export default withRouter(RoomLogin);