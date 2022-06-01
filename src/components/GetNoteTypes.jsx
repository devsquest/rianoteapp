import React from "react";
import TopNav from "./common/topnav";
import SideNav from "./common/sidenav";
import BasicForm from "./users/BasicForm";

const MyProfile = (props) => {
  const {notes, noteType} = props;
  return (
    
    <main role="main" className="">
                    <div className="modal-body">
                      <h5>Select Note Type</h5>
                      <ul className="list-group">
                        {notes.map((note) => (
                          <Type
                            noteType={noteType}
                            key={note.id}
                            note={note}
                            selectedType={this.handleType}
                          />
                        ))}
                      </ul>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={this.handleSelection}
                      >
                        Close
                      </button>
                      <Link
                        onClick={this.goNote}
                        //to={`/note/${noteType.id}`}
                        type="button"
                        className="btn btn-success"
                      >
                        Start New Note
                      </Link>
                    </div>
    </main>
  
  );
};

export default MyProfile;
