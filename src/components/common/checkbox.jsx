import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="custom-control custom-checkbox mb-3">
      <input {...rest} name={name} id={name} className="custom-control-input" />
      {error && (
        <div className="alert alert-danger">
          {error}
          <label className="custom-control-label" htmlFor={name}>
            {label}
          </label>
        </div>
      )}
    </div>
  );
};

export default Input;
