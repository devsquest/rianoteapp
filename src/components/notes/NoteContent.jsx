import React, { Component } from "react";
import 'react-confirm-alert/src/react-confirm-alert.css';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import {IconButton, TextField} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {IsoTwoTone} from "@material-ui/icons";

class NoteContent extends Component {
    state = {
        iComment: '',
        iFlag: true,
        cFlag: true
    }

    handleMainComment = (comment, setIntroComment) => {
        if (!this.state.iFlag) {
            setIntroComment(comment)
        }
        this.setState({iComment: comment});
    }

    handleMainClosingComment = (comment, setClosingComment) => {
        if (!this.state.cFlag) {
            setClosingComment(comment)
        }
        this.setState({cComment: comment});
    }

    handleComment = (setIntroComment) => {
        if (this.state.iFlag) {
            this.setState({iFlag: false});
            setIntroComment(this.state.iComment)
        } else
        {
            this.setState({iFlag: true});
            setIntroComment('')
        }
    }

    handleClosingComment = (setClosingComment) => {
        if (this.state.cFlag) {
            this.setState({cFlag: false});
            setClosingComment(this.state.cComment)
        } else
        {
            this.setState({cFlag: true});
            setClosingComment('')
        }
    }

    render() {
        const { pname, setName, pdate, setDate, startTime, setStartTime,
            endTime, setEndTime, sessionFee, setSessionFee,
            introComment, setIntroComment, closingComment, setClosingComment} = this.props;

      return (
        <div className="row bg-title">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 m-b-10">
                <div className="input-group">
                  <TextField
                      variant="outlined"
                      className={"form-control"}
                      id="exampleInputuname"
                      label="Name"
                      InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setName(e.target.value)}
                      value={pname}
                      size="small"
                      fullWidth
                  />
                </div>
              </div>

              <div className="col-md-3 m-b-10">
                <div className="input-group">
                  <TextField
                      className="form-control"
                      label="Date"
                      id="pdate"
                      value={pdate}
                      type="date"
                      onChange={(e)=> setDate(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      fullWidth
                      variant="outlined"
                      size="small"
                  />
                </div>
              </div>
              <div className="col-md-2 m-b-10">
                <div className="input-group">
                  <TextField
                      className={"form-control"}
                      id="start-time"
                      label="Start Time"
                      type="time"
                      size="small"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      fullWidth
                      variant="outlined"
                  />
                </div>
              </div>
              <div className="col-md-2 m-b-10">
                <div className="input-group">
                    <TextField
                      className={"form-control"}
                      id="end-time"
                      label="End Time"
                      type="time"
                      size="small"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      variant="outlined"
                      fullWidth
                  />
                </div>
              </div>
              <div className="col-md-2 m-b-10">
                  <div className="input-group">
                  <CurrencyTextField
                      label="Fee"
                      size="small"
                      variant="outlined"
                      fullWidth
                      value={sessionFee}
                      onChange={(e) => setSessionFee(e.target.value)}
                      currencySymbol="$"
                      minimumValue="0"
                      outputFormat="string"
                      decimalCharacter="."
                      digitGroupSeparator=","
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 m-b-5">
                <div className="input-group bootstrap-touchspin">
                    <TextField
                        variant="outlined"
                        className={"form-control"}
                        id="introComments"
                        label="Introductory Comments"
                        fullWidth
                        size="small"
                        onChange={(e) => this.handleMainComment(e.target.value, setIntroComment)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                onClick={() => this.handleComment(setIntroComment)}
                                className={`${!this.state.iFlag ? 'introSelected' : ''}`}
                                edge="end"
                                >
                                    <IsoTwoTone />
                                </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
              </div>
              <div className="col-md-6  m-b-5">
                <div className="input-group bootstrap-touchspin">
                    <TextField
                        variant="outlined"
                        className={"form-control"}
                        id="closingComments"
                        label="Closing Comments"
                        fullWidth
                        size="small"
                        onChange={(e) => this.handleMainClosingComment(e.target.value, setClosingComment)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => this.handleClosingComment(setClosingComment)}
                                        edge="end"
                                        className={`${!this.state.cFlag ? 'introSelected' : ''}`}
                                    >
                                        <IsoTwoTone />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default NoteContent;