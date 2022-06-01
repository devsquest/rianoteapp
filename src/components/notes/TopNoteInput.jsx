import React from "react";
import { Link } from "react-router-dom";

const TopNoteInput = ({ type, name, id, placeholder, selectedInput }) => {
  return (
    <input
      type={type}
      class="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      value=""
      onChange={(event) => selectedInput(event)}
    />
  );
};

export default TopNoteInput;
