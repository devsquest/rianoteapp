import React, { Component } from "react";
class Type extends Component {
  render() {
    const { note, selectedType, switchNote } = this.props;
    return (
      <li className={this.getClasses()} onClick={() => selectedType(note)}>
        {note.name}
      </li>
    );
  }
  getClasses() {
    const { note, noteType } = this.props;
    let classes = "list-group-item list-group-item-action ";
    classes += noteType && note.id === noteType.id ? "active" : "";
    return classes;
  }
}

export default Type;
