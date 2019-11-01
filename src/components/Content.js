import React from 'react';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Product from './Product'
import User from './User'
import Animation from './Animation'
import Dashboard from './Dashboard'

const Content = () => {
  return(
      <Switch>
        <Route exact path ="/home" component = { Dashboard }/>
        <Route  path ="/user" component = { User } />
        <Route  path ="/product" component = { Product } />
        <Route  path ="/animation" component = { Animation } />
      </Switch>
  );
}
export default Content;
