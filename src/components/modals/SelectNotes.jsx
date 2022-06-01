import React from "react";

const GetStarted = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default GetStarted;
