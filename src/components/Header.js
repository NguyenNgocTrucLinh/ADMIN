import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
const Header = () => {
  let { path, url } = useRouteMatch();
  return(
    <header className="main-header">
      <Link to="/home" className="logo">
        <span className="logo-mini"><b>A</b>LT</span>
        <span className="logo-lg"><b>Admin</b>LTE</span>
      </Link>

      <nav className="navbar navbar-static-top">

        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">

            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="assets/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
              </a>
              <ul className="dropdown-menu">
                <li className="user-footer">
                  <div className="pull-right">
                    <Link to={`/`} className="btn btn-default btn-flat">Edit Profile</Link><br/>
                    <Link to={`/`} className="btn btn-default btn-flat">Sign out</Link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
