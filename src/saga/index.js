import { all, takeLatest, takeEvery} from 'redux-saga/effects';

// saga Workers

import loginWorker from './login.js';
import registerWorker from './register.js';


//  action actiontypes

import {LOGIN_REQUEST } from "../actiontypes/login.js";

import {REGISTER_REQUEST } from "../actiontypes/register.js";


export default function* rootSaga(){
  yield all([
    
    yield takeLatest(LOGIN_REQUEST, loginWorker),
    yield takeLatest(REGISTER_REQUEST, registerWorker),
   
  ])
}
