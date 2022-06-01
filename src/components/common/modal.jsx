import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ modalid, title, content }) => {
  return (
      <div className="modal fade bs-example-modal-lg" id={modalid} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myLargeModalLabel">Help with Note Designer</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body" id="slimtest2">
              {content}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal"><i className="fa fa-times"></i>&nbsp;Close
              </button>
            </div>
          </div>
        </div>
      </div>
    //   className="modal fade bd-example-modal-lg"
    //   id={modalid}
    //   tabindex="-1"
    //   aria-labelledby="exampleModalLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h2 className="modal-title" id="exampleModalLabel">
    //           {title}
    //         </h2>
    //         <button
    //           type="button"
    //           className="close"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">{content}</div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           data-dismiss="modal"
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Modal;
