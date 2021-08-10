import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import './chatList.css';

import ChatProfile from '../chatProfile/index.js';
import alt from '../alt.png';

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	active : 'null',
      inboxObj: [], 
      activeId:'' ,
      userName:'',
      userEmail:'',

    };
   
  }

 
  render(){

    	return(
        <div class = 'chatList'>
          <p class = 'chatList-tittle'> Chat Rooms</p>
            <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>maleeha</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
               <div class = 'chatList-count'>2</div> 
              
            </div>

          </div>
       </div>



       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>zuha</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
               <div class = 'chatList-count'>2</div> 
              
            </div>

          </div>
       </div>




<div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>zuha</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
               <div class = 'chatList-count'>2</div> 
              
            </div>

          </div>
       </div>






       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>zuha</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
               <div class = 'chatList-count'>2</div> 
              
            </div>

          </div>
       </div>









       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>zuha</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
               <div class = 'chatList-count'>2</div> 
              
            </div>

          </div>
       </div>







       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>zuha</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
               <div class = 'chatList-count'>2</div> 
              
            </div>

          </div>
       </div>

    	 </div>
    	)
  	}

}



export default withRouter(ChatList) ;