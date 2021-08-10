import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './searchBar.css';

class ChatOptions extends Component {

  constructor(props) {
     super(props);
     this.state={
      active : 'Existing'
       
     }
     this.onClick=this.onClick.bind(this);
   }

   onClick(active , ExistingUser){
    this.setState({
      active:active,
    
     });
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
      </div>
    );
  }
}

export default ChatOptions;