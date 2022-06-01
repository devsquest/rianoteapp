import React, { Component } from "react";
import QuestionOPtions from "../common/QuestionOptions";
import QuestionWithOption from "../notes/QuestionWithOptions";
import QuestionWithMultiOptions from "../notes/QuestionWithMultiOptions";
import reactStringReplace from 'react-string-replace';
import NoteTop from "../notes/NoteTop";
import NoteArea from "../notes/NoteArea";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class NoteRightSide extends Component {
    state = {
        iComment: ''
    };

    handlePdf = () => {
        const input = document.getElementById("noteContent");
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

    handleConfirmation = () => {
        confirmAlert({
            title: 'Confirmation',
            message: "Are you sure you want to clear this note AND all selections plus any additional text you have input? Choose 'CANCEL' if you haven't exported or copied the note yet and you want to; or YES to clear it now.",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.handleClear()
                },
                {
                    label: 'Cancel',
                }
            ]
        });
    };

    handleCopy = () => {
        confirmAlert({
            title: 'Copy',
            message: "In this version of Note Designer you copy a note by FIRST highlighting the text. SECOND, you use your usual browser commands for copying. Depending on your browser, you then could use the Edit/Copy menu, for example. Or on Windows you might use ctrl-c (pressing the ‘control’ key and c key at the same time), or right-click on the highlighted area with the mouse and choose Copy. On Macs you could use command-c and in iPad you press the note and choose Copy. Then you can paste the note into a word processor document, much as you would paste anything you have copied.",
            buttons: [
                {
                    label: 'Close',
                }
            ]
        });

    };

    handleClear = () => {
        window.location.reload();
    };

    render() {
        const { selected, questions, content, noteType,
            headingIdsArr, headingTextArr, headingContentArr} = this.props;
        const data = this.state;
        return (
            <div className="col-md-5">
                <div className="pnl-preview section-group">
                    <div className="card-header">
                        <button id="btn-print" className="btn btn-info btn-sm m-r-5" onClick={this.handlePdf}>
                            <i className="fa fa-print"/>
                            Export
                        </button>
                        <button className="btn btn-info btn-sm m-r-5" onClick={this.handleCopy}>
                            <i className="fa fa-copy"/>
                            Copy
                        </button>
                        <button id="btn-edit" className="btn btn-info btn-sm" data-toggle="modal" data-target="#finalEdit">
                            <i className="fa fa-edit"/>
                            Final edit
                        </button>
                        <button id="btn-eraser" className="btn btn-danger btn-sm pull-right" onClick={this.handleConfirmation}>
                            <i className="fa fa-eraser"/>
                            Clear
                        </button>
                    </div>
                    <div className="card-body container-fluid">
                        <div id="noteContent">
                            <div id="generatedNoteContent">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="mb-2"><b>Name:</b> <span className="lblDisplay"
                                           id="lblDisplayName"/>
                                            {
                                                this.props.pname
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="mb-2"><b>Date:</b> <span className="lblDisplay"
                                           id="lblDisplayDate"/>
                                            {
                                                this.props.pdate
                                            }
                                        </p>
                                    </div>
                                </div>

                                { this.props.startTime && <div className="row">
                                    <div className="col-12">
                                        <p className="mb-2"><b>Start at:</b> <span className="lblDisplay"
                                                                                   id="lblDisplayDate"/>
                                            {
                                                this.props.startTime
                                            }
                                        </p>
                                    </div>
                                </div>}

                                {this.props.endTime && <div className="row">
                                    <div className="col-12">
                                        <p className="mb-2"><b>End at:</b> <span className="lblDisplay"
                                                                                 id="lblDisplayDate"/>
                                            {
                                                this.props.endTime
                                            }
                                        </p>
                                        </div>
                                    </div>
                                }
                                { headingIdsArr.map((element, index) => {
                                    return <div className="row">
                                        <div className="col-12">
                                            <p className="mb-2"><b>{headingTextArr[element]}</b> <span className="lblDisplay"
                                                 id="lblDisplayDate"/>
                                                {
                                                    headingContentArr[element]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                })}

                                {this.props.sessionFee && <div className="row">
                                    <div className="col-12">
                                        <p className="mb-2"><b>Session fee:</b> <span className="lblDisplay"
                                                                                      id="lblDisplayDate"/>
                                            {
                                                this.props.sessionFee
                                            }
                                        </p>
                                    </div>
                                </div>}
                                <div className="row"/>
                                <div className="row" id="divOpeningHeading">
                                    <div className="col-12">
                                        <p><b id="lblOpeningHeading">Session Note:</b>
                                            <br/><br/>
                                            { this.props.introComment && this.props.introComment + '. ' }
                                            { this.props.content }
                                            { this.props.closingComment && ' ' + this.props.closingComment + '.' }
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
    }
}

export default NoteRightSide;
