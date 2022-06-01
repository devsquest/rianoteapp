import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {confirmAlert} from "react-confirm-alert";

const FinalEditContent = (props) => {
    const handlePdf = () => {
        const input = document.getElementById("finalContent");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation: "A4",
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, "PNG", 10, 20, pdfWidth - 20, pdfHeight);
            pdf.save("download.pdf");
        });
    };

    return (
        <div className="col-md-12">
            <div className="pnl-preview section-group">
                <div className="card-header">
                    <button id="btn-print" className="btn btn-info btn-sm m-r-5" onClick={handlePdf}>
                        <i className="fa fa-print"/>
                        Export
                    </button>
                </div>
                <div className="card-body container-fluid">
                    <div id="finalContent">
                        <div id="generatedNoteContent">
                            <div className="row">
                                <div className="col-12">
                                    <p className="mb-2"><b>Name:</b> <span className="lblDisplay"
                                                                           id="lblDisplayName"/>
                                        {
                                            props.pname
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="mb-2"><b>Date:</b> <span className="lblDisplay"
                                                                           id="lblDisplayDate"/>
                                        {
                                            props.pdate
                                        }
                                    </p>
                                </div>
                            </div>

                            { props.startTime && <div className="row">
                                <div className="col-12">
                                    <p className="mb-2"><b>Start at:</b> <span className="lblDisplay"
                                                                               id="lblDisplayDate"/>
                                        {
                                            props.startTime
                                        }
                                    </p>
                                </div>
                            </div>}

                            {props.endTime && <div className="row">
                                <div className="col-12">
                                    <p className="mb-2"><b>End at:</b> <span className="lblDisplay"
                                                                             id="lblDisplayDate"/>
                                        {
                                            props.endTime
                                        }
                                    </p>
                                </div>
                            </div>
                            }
                            { props.headingIdsArr.map((element, index) => {
                                return <div className="row">
                                    <div className="col-12">
                                        <p className="mb-2"><b>{props.headingTextArr[element]}</b> <span className="lblDisplay"
                                                                                                   id="lblDisplayDate"/>
                                            {
                                                props.headingContentArr[element]
                                            }
                                        </p>
                                    </div>
                                </div>
                            })}

                            {props.sessionFee && <div className="row">
                                <div className="col-12">
                                    <p className="mb-2"><b>Session fee:</b> <span className="lblDisplay"
                                                                                  id="lblDisplayDate"/>
                                        {
                                            props.sessionFee
                                        }
                                    </p>
                                </div>
                            </div>}
                            <div className="row"/>
                            <div className="row" id="divOpeningHeading">
                                <div className="col-12">
                                    <p contentEditable={"true"}><b id="lblOpeningHeading">Session Note:</b>
                                        <br/><br/>
                                        { props.introComment && props.introComment + '. ' }
                                        { props.content }
                                        { props.closingComment && ' ' + props.closingComment + '.' }
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="fixedSampleSignature">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            ________________________
                            <div>Sara Chaudhri LCSW</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalEditContent;
