import React, { Component } from "react";
import { toast } from "react-toastify";
import { Switch, Link } from "react-router-dom";
import TopNav from "../common/topnav";
import SideNav from "../common/sidenav";
import Modal from "../common/modal";
import Dashboard from "../dashboard";
import Subscription from "../subscriptions";
import Orders from "../orders";
import Notifications from "../notifications";
import Requests from "../requests";
import Profile from "../profile";
import GetStarted from "../getstarted";
import Myprofile from "../myprofile";
import ProtectedRoute from "../common/ProtectedRoute";
import { getUser } from "../../services/authService";
import { getNotes } from "../../services/noteService";
import Type from "../type";

class DashboardLayout extends Component {
  state = {
    noteType: {},
    classes: {},
    notes: [],
    user: [],
    errors: {},
  };
  async componentDidMount() {
    try {
      console.log("here in pvt  layout!");
      const { data: notes } = await getNotes();
      const { data: user } = await getUser();
      await this.setState({...this.state, user: user} );
      this.setState({ notes: notes["success"] });
    } catch (ex) {
      if (ex.response && ex.response.status === 500) {
          toast.error("Please login to access application!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  handleType = (type) => {
    let { noteType } = this.state;
    noteType = type;
    this.setState({ ...this.state, noteType: noteType });
    console.log(noteType);
  };
  handleSelection = () => {
    let { noteType } = this.state;
    noteType = {};
    this.setState({ noteType });
  };

  goNote = () => {
    const { noteType } = this.state;
    const url = noteType ? "/" + noteType : "";
    window.location = "/note" + url;
  };
  render() {
    const { notes, noteType } = this.state;
    const Getstart = <GetStarted />;
    //const GetMyprofil = <Myprofile user={this.state.user} />;
    return (
      <React.Fragment>
        <TopNav user={this.state.user} />
        {/*<div className="container-fluid">*/}
        {/*  <div className="row">*/}
            <SideNav />
            <Switch>
              <ProtectedRoute
                exact
                path="/dashboard"
                user={this.state.user}
                component={Dashboard}
              />
              <ProtectedRoute
                exact
                user={this.state.user}
                path="/profile"
                component={Profile}
              />
              <ProtectedRoute
                exact
                path="/subscriptions"
                component={Subscription}
              />
              <ProtectedRoute
                exact
                path="/orders"
                component={Orders}/>
              <ProtectedRoute
                exact
                path="/notifications"
                component={Notifications}/>
              <ProtectedRoute
                exact
                path="/myRequests"
                component={Requests}/>
            </Switch>
            <Modal
              modalid="Getstart"
              title="Get Started"
              content={Getstart}
              maxwidget="80%"
            />
          {/*</div>*/}
        <div
            className="modal fade"
            id="responsive-modal"
            tabIndex="-1"
            aria-labelledby="responsive-modalLabel"
            aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Start a new note</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-body">
                <p>Choose Note Type:</p>
                <form>
                  {notes.map((note) => (
                      <div className="checkbox checkbox-info checkbox-circle" key={note.id}>
                        <input id={note.id} type="checkbox" name="notes"
                               onClick={() => this.handleType(note.id)}/>
                        <label htmlFor={note.id}>{note.name}</label>
                      </div>
                  ))}
                </form>
                <p> Notice: the content of the current note will be discarded if you choose to open a new note on the current tab.</p>
              </div>
              <div className="modal-footer">
                <Link type="button"
                        className="btn btn-info waves-effect waves-light"
                        onClick={this.goNote}>
                  Start a new note
                </Link>
                <button type="button" className="btn btn-default waves-effect"
                        data-dismiss="modal"
                        onClick={this.handleSelection}
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardLayout;
