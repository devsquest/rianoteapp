import React from "react";
import { Link } from "react-router-dom";

const Preference = ({ modalid, title, content }) => {
  return (
      <div className="modal fade" id={modalid} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myLargeModalLabel">Preferences and Advanced Options</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body" id="slimtest1">
              {content}
            </div>
            <div className="modal-footer preference-footer">
              <button type="button" className="btn btn-info waves-effect text-left"><i
    className="fa fa-save"/>&nbsp;Save
              </button>
              <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal"><i
    className="fa fa-times"/>&nbsp;Discard changes and Close
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Preference;
