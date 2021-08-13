import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './searchBar.css';
import {MdSend} from 'react-icons/md';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

class SearchBarDiv extends Component {

  constructor(props) {
     super(props);
     this.state={
      active : 'Existing'
       
     }
     this.onClick=this.onClick.bind(this);
   }

   onClick(history){
    history.push('/createRoom')
    }

  render() {
    const myArray = [
      {
        lable:'Existing',
         ExistingUser : true 
       } ,
      {
        lable:'New' , 
        ExistingUser:false
      }
   ];
    return (
      <div class = 'chat-opt'>

          <div class = "chat-opt-search-bar">
            <input class = "search-iputfield" placeholder = 'Search here.......'  
              type="text"
           value = {this.props.value}
           placeholder = 'search here'
           onChange= {this.props.handleChange}
           onFocus={this.props.onFocus}/>
          </div>

          <div class ='create-btn'>
            <div class = 'create-btn' onClick = {()=>this.onClick(this.props.history)}>Create Room</div>
          </div>

      </div>
    );
  }
}

export default withRouter(SearchBarDiv);