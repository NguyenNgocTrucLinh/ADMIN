import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'
import ControlSidebar from './ControlSidebar'
import Content from './Content'
import {BrowserRouter as Router,Switch } from 'react-router-dom'

const Home = () => {
    return (
      <Router>
          {/*<Link to="/" className="btn btn-default btn-flat">Sign out</Link>*/}
          <Header/>
          <ControlSidebar/>
          <Content/>
      </Router>
    );
}
export default Home;
