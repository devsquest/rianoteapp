import React from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {confirmAlert} from "react-confirm-alert";

const FinalEdit = ({ modalid, title, fcontent }) => {
    return (
        <div className="modal fade" id={modalid} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myLargeModalLabel">{title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body" id="slimtest1">
                        {fcontent}
                    </div>
                    <div className="modal-footer preference-footer">
                        <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal"><i
                            className="fa fa-times"/>&nbsp;Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalEdit;
