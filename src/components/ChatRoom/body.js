import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";


class TextSectionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
 
  }


    render(){
    	return(
    	 <div class = 'text-body'>
        <div class = 'text-body-chatBox-container'>

          <div class ='text-body-chatBox'>
          <div class =  "text-body-chat side-arrow">
           hello
           </div>
          <div class =   'text-body-chat-time'> 9:00 am </div>
        </div>

          
          <div class ='text-body-chatBox-send'>
          <div class =  "text-body-chat-send side-arrow-send">
             <div class = 'text-user-name'>User Name</div>
              <div class = 'user-text'> hello ! how are you doing ? </div>
            </div>
            <div class =   'text-body-chat-time-send'> 9:00 am </div>
        </div>
    </div>
     </div>
       
    	)
  	}
}



export default withRouter(TextSectionBody); 
