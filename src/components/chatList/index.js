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

  login(path){
    path.push('/pass');
  }
  render(){

    	return(
        <div class = 'chatList' onClick={()=>this.login(this.props.history)}>
          <p class = 'chatList-tittle'> Chat Rooms</p>
            <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>IT department</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>IT meeting today at !!:30 AM!</p>
               <div class = 'chatList-count'>5</div> 
              
            </div>

          </div>
       </div>



       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>school friends</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>hello everyone!</p>
               <div class = 'chatList-count'>52</div> 
              
            </div>

          </div>
       </div>




<div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>college buddies</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>yeah sure!</p>
               <div class = 'chatList-count'>19</div> 
              
            </div>

          </div>
       </div>






       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>friends crew</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>thats great!!!</p>
               <div class = 'chatList-count'>12</div> 
              
            </div>

          </div>
       </div>









       <div class ='chatList-main-div-active'> 

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>family</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>lets have dinner out today !</p>
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
              <p class = 'chatList-user'>collegues</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no meeting today</p>
               <div class = 'chatList-count'>3</div> 
              
            </div>

          </div>
       </div>

    	 </div>
    	)
  	}

}



export default withRouter(ChatList) ;