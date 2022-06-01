import React from "react";
import { Link } from "react-router-dom";
const NoteTopNav = (user) => {
    let person = user && user["user"] ? user["user"][0] : [];
    return (
      <nav className="navbar navbar-default navbar-static-top m-b-0">
          <div className="navbar-header">
              <div className="top-left-part">
                  <a className="logo" href="/">
                      <b><i className="fa fa-home"/>&nbsp; Ria Note</b></a>
                  <button className="btn btn-success btn-sm" id="btnNewNote" data-toggle="modal"
                          data-target="#responsive-modal"><i className="fa fa-plus"/> New Note
                  </button>
              </div>
              <ul className="nav navbar-top-links navbar-right pull-right">
                  <li className="nav-item">
                      <a className="nav-link" href="#" data-toggle="modal"
                         data-target="#help">
                          <i className="fa fa-question-circle"/>&nbsp;Help </a></li>
                  <li>
                      <a href="" data-toggle="modal" data-target="#preference">
                          <i className="fa fa-cogs"/>&nbsp;Preferences</a></li>
                  <li className="dropdown"><a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#">
                      <img src="/plugins/images/users/varun.jpg" alt="user-img" width="36" className="img-circle"/>
                      { (person && person.name)
                          ? <b className="hidden-xs">{ person.name }</b>
                          : <h4>"Anonymous"</h4>
                      }</a>
                      <ul className="dropdown-menu dropdown-user animated flipInY">
                          <li>
                              <div className="dw-user-box">
                                  <div className="u-img"><img src="/plugins/images/users/varun.jpg" alt="user"/></div>
                                  <div className="u-text">
                                      { (person && person.name)
                                          ? <h4> {person.name} </h4> : <h4>"Anonymous"</h4>
                                      }
                                      { (person && person.name)
                                          ? <p className="text-muted">{ person.email }</p> : <h4>"Anonymous"</h4>
                                      }
                                  </div>
                              </div>
                          </li>
                          <li role="separator" className="divider"/>
                          <li><a href="/dashboard"><i className="ti-user"/> Dashboard </a></li>
                          <li><a href="/logout"><i className="fa fa-power-off"/> Logout </a></li>
                      </ul>
                  </li>
                </ul>
          </div>
    </nav>
  );
};

export default NoteTopNav;
