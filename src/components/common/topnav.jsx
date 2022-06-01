import React from "react";
import { Link } from "react-router-dom";
const TopNav = (user) => {
    let person = user && user["user"] ? user["user"][0] : [];
  return (
      <nav className="navbar navbar-default navbar-static-top m-b-0 dash-top">
          <div className="navbar-header">
              <div className="top-left-part">
                  <Link className="logo navbar-brand" to="/dashboard">
                      <b>
                          <i className="fa fa-home"/>
                          &nbsp; Ria Note
                      </b>
                  </Link>
              </div>

              <ul className="nav navbar-top-links navbar-right pull-right">
                  <li className="dropdown">
                      <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#">
                          <img src="../plugins/images/users/varun.jpg" alt="user-img" width="36" className="img-circle"/>
                          { (person && person.name)
                              ? <b className="hidden-xs">{ person.name }</b>
                              : <h4>"Anonymous"</h4>
                          }
                      </a>
                      <ul className="dropdown-menu dropdown-user animated flipInY">
                          <li>
                              <div className="dw-user-box">
                                  <div className="u-img">
                                      <img src="../plugins/images/users/varun.jpg" alt="user"/>
                                  </div>
                                  <div className="u-text">
                                      { (person && person.name)
                                          ? <h4> {person.name} </h4> : <h4>"Anonymous"</h4>
                                      }
                                      { (person && person.name)
                                          ? <p className="text-muted">{ person.email }</p> : <h4>"Anonymous"</h4>
                                      }
                                      <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View
                                          Profile</a>
                                  </div>
                              </div>
                          </li>
                          <li role="separator" className="divider"/>
                          <li>
                              <Link to="/logout">
                                  <i className="fa fa-power-off mr-2"/>
                                  Logout
                              </Link>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div>
      </nav>
  );
};

export default TopNav;
