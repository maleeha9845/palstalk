import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';

import {MdSend} from 'react-icons/md';
import {FaRegGrinAlt} from 'react-icons/fa';
import {IoIosAttach} from 'react-icons/io';




class TextSectionFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
   

  render(){ 

    	return(
        <div class = 'textSection-footer'>

          <div class = 'textSection-footer-inputField'>
            <div class = 'textSection-footer-icon' >
              <IoIosAttach size = '18px'color = "#497174"/>
            </div> 
              <input class = 'textSection-text-textField' placeholder = 'text here.....' />
                
              <div class = 'textSection-footer-icon'>
               <FaRegGrinAlt size = '14px'color = "#497174"/>
              </div>
          </div> 

          <div class ='textSection-sendBtn'>
            <p class = 'textSection-sendBtn-text'>send</p>
            <MdSend size = '14px' color = 'white'/>
          </div>

       </div>
       
    	)
  	}
  }


export default TextSectionFooter;