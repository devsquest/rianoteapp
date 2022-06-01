import React from "react";
import { Link } from "react-router-dom";

const SideNav = (props) => {
  return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav slimscrollsidebar">
          <div className="sidebar-head">
            <h3>
              <span className="fa-fw open-close">
              <i className="ti-menu hidden-xs"/>
              <i className="ti-close visible-xs"/>
              </span>
              <span className="hide-menu">
                Ria Note
              </span>
            </h3>
          </div>
          <ul className="nav" id="side-menu">
            <li>
              <Link className="nav-link active" to="/dashboard">
                <i className="ti-user"/>
                <span className="hide-menu">
                  &nbsp;Dashboard
                </span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <a
                  className="nav-link waves-effect"
                  //to="/getting-start"
                  data-toggle="modal"
                  data-target="#Getstart"
                  href="#"
              >
                <i className="fa fa-info-circle"/>
                <span className="hide-menu">
                  &nbsp;Getting Started
                </span>
              </a>
            </li>
            <li>
              <Link className="nav-link waves-effect" to="/profile">
                <i className="fa fa-user"/>
                <span className="hide-menu">
                  &nbsp;My Profile
                </span>
              </Link>
            </li>
            <li>
              <Link className="nav-link waves-effect" to="/myRequests">
                <i className="icon-list"/>
                <span className="hide-menu">
                  &nbsp;My Requests
                </span>
              </Link>
            </li>
            <li>
              <Link className="nav-link waves-effect" to="/orders">
                <i className="fa fa-shopping-cart"/>
                <span className="hide-menu">
                  &nbsp;My Orders
                </span>
              </Link>
            </li>
            <li>
              <Link className="nav-link waves-effect" to="/subscriptions">
                <i className="fa fa-tags"/>
                <span className="hide-menu">
                  &nbsp;My Subscriptions
                </span>
              </Link>
            </li>
            <li>
              <Link className="nav-link waves-effect" to="/notifications">
                <i className="fa fa-bell-o"/>
                <span className="hide-menu">
                  &nbsp;My Notifications
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default SideNav;
