import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Switch, HashRouter as Router, Route ,browserHistory ,Redirect} from "react-router-dom";
import { LocalizeProvider } from 'react-redux'

import Login from './pages/login/login';
import DashBoard from './pages/DashBoard/index.js';
import CreateChatRoom from './pages/createChatRoom/index.js';
import ProfileSetting from './pages/profile/profile.js';
import SettingPage from './pages/settings/index.js';
import RoomLogin from './pages/password/pass';

function App() {
  return (
    <div className="App">
     <Router>
      <switch>
        <Route path="/login" component={Login}/>
        <Route path="/dash" component={DashBoard}/>
        <Route path="/createRoom" component={CreateChatRoom}/>
        <Route path="/setting" component={SettingPage}/>
        <Route path="/profile" component={ProfileSetting}/>
        <Route path="/pass" component={RoomLogin}/>
      </switch>
    </Router>
    </div>
  );
}

export default App;
