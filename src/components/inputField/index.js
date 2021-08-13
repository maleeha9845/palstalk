import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './input.css';

class InputField extends Component {

  constructor(props) {
     super(props);
     this.state={}
   }
render(){
    return (
      <div class = 'input-container'>

        <div class = 'input-tittle'>{this.props.tittle}</div>

        <input class = "iputfield" placeholder = {this.props.placeholder}  
           type={this.props.type}
           value = {this.props.value}
           onChange= {this.props.handleChange}
           onFocus={this.props.onFocus}
        />    
      </div>
    );
  }
}

export default InputField;