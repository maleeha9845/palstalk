import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import {ImSearch} from 'react-icons/im';
import {IoMdNotifications} from 'react-icons/io';
import {BsThreeDots} from 'react-icons/bs';

class TextSectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
   this.onClick=this.onClick.bind(this);
   }

   onClick(props){
    props.push('/setting')
    }

  render(){
    	return(
    	 <div class = 'text-header'>
        <div class = 'text-header-search-bar'>
          Room Name
        </div>

        <div class = 'participants-count'>
          Number of participants
          <p > 28 </p>
          </div>
        <div class = 'text-header-icon' onClick = {()=> this.onClick(this.props.history)}>
           <BsThreeDots size = ' 18px' color='#497174' />
        </div>

       
       </div>
       
    	)
  	}
}

export default withRouter(TextSectionHeader);