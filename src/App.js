import logo from './logo.svg';
import './App.css';
import { Switch, HashRouter as Router, Route ,browserHistory ,Redirect} from "react-router-dom";

import DashBoard from './pages/DashBoard/index.js';

function App() {
  return (
    <div className="App">
     <Router>
      <switch>
        <Route path="/" component={DashBoard}/>
      </switch>
    </Router>
    </div>
  );
}

export default App;
