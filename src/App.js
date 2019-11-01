import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch ,Route} from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'


function App() {
    return (
      <Router>
        <Route exact path ="/" component = { Login }/>
        <Route  path ="/home" component = { Home }/>
      </Router>
    );
}

export default App;

