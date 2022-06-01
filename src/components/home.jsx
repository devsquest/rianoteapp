import React, { Component } from "react";
import { toast } from "react-toastify";
import { getNotes } from "../services/noteService";
import { getUser } from "../services/authService";
import { Link } from "react-router-dom";
import Type from "./type";

class Home extends Component {
  state = {
    noteType: {},
    classes: {},
    notes: [],
    user: [],
    errors: {},
  };
  async componentDidMount() {
    try {
      const { data: notes } = await getNotes();
      const { data: user } = await getUser();
      this.setState({ notes: notes["success"] });
      this.setState({ user });
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
    this.setState({ noteType:type });
  };

  handleSelection = () => {
    let { noteType } = this.state;
    noteType = {};
    this.setState({ noteType });
    console.log(noteType);
  };

  goNote = () => {
    const { noteType } = this.state;
    const url = noteType ? "/" + noteType : "";
    window.location = "/note" + url;
  };
  render() {
    const { notes, noteType } = this.state;
    return (
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h1 className="card-title text-center login-heading">
                Ria Notes Designer
              </h1>
              <div className="sub-heading">Write better notes and faster.</div>
              <hr className="my-4" />
              <br />
              {this.state.user != "" && (
                <form className="form-signin">
                  <button
                    type="button"
                    className="btn btn-lg btn-success btn-block text-uppercase"
                    data-toggle="modal"
                    data-target="#responsive-modal"
                  >
                    Start a New Note
                  </button>
                  <Link
                    to="/dashboard"
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Got to Dashboard
                  </Link>
                  <br />
                  <br />
                </form>
              )}
              {this.state.user == "" && (
                <React.Fragment>
                  <Link
                    to="/login"
                    className="btn btn-lg btn-success btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </Link>
                  <br />
                  <br />
                </React.Fragment>
              )}

              <div
                  className="modal fade"
                  id="responsive-modal"
                  tabIndex="-1"
                  aria-labelledby="myModalLabel"
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
                    </div>
                    <div className="modal-footer">
                      <button type="button"
                              className="btn btn-primary"
                              onClick={this.goNote}>
                        Start a new note
                      </button>
                      <button type="button"
                              className="btn btn-secondary ml-1"
                              data-dismiss="modal"
                              onClick={this.handleSelection}
                      >Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
