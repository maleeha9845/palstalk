import { combineReducers } from 'redux'


import login from "./login.js";
import register from "./register.js";



const reducers = combineReducers({

  login:login,
  register:register,
  
})

export default reducers;
