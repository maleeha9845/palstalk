import logo from './logo.svg';
import './App.css';
import { Switch, HashRouter as Router, Route ,browserHistory ,Redirect} from "react-router-dom";

import DashBoard from './pages/DashBoard/index.js';
import CreateChatRoom from './pages/createChatRoom/index.js';
import SettingPage from './pages/settings/index.js';

function App() {
  return (
    <div className="App">
     <Router>
      <switch>
        <Route path="/dash" component={DashBoard}/>
        <Route path="/createRoom" component={CreateChatRoom}/>
        <Route path="/setting" component={SettingPage}/>
      </switch>
    </Router>
    </div>
  );
}

export default App;
