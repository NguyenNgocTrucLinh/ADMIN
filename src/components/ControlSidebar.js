import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {
  return(
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          {/*<li className="header">MAIN NAVIGATION</li>*/}
          <li className="treeview">
            <Link to="/home">
              <i className="fa fa-dashboard" /> <span>Dashboard</span>
              <span className="pull-right-container">
                  <i className="fa fa-angle-right pull-left" />
                </span>
            </Link>
          </li>
          <li className="treeview">
            <Link to="/user">
              <i className="fa fa-files-o" />
              <span>User</span>
              <span className="pull-right-container">
                  <i className="fa fa-angle-right pull-left" />
                </span>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <i className="fa fa-th" /> <span>Product</span>
              <span className="pull-right-container">
                  <i className="fa fa-angle-right pull-left" />
                </span>
            </Link>
          </li>
          <li className="treeview">
            <Link to="/animation">
              <i className="fa fa-pie-chart" />
              <span>Animation</span>
              <span className="pull-right-container">
                 <i className="fa fa-angle-right pull-left" />
                </span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}
export default SideBar;
