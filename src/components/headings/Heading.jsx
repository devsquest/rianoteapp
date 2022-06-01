import React, {Component, useState} from "react";
import ChildHeadings from "./ChildHeadings";
import {saveHeading, deleteHeadingById} from "../../services/headingService";

class Heading extends Component {
    state = {
        isInEditMode: false,
        isWriting: false,
        isAdded: true,
        headingsText: [],
        headingsContent: [],
        headingIds: [],
        numChildren: 0,
        headingId: 1,
        children: [],
        childNum: 0
    }

    componentDidMount() {
        let children = this.state.children;
        children.push(<ChildHeadings key={this.state.childNum+1} number={this.state.childNum+1} id={'temp' + this.state.childNum+1}
                                     setHeadingWithContent = {this.setHeadingWithContent}
                                     handleTemporaryHeading = {this.handleTemporaryHeading}
                                     saveTempHeadings = {this.saveTempHeadings}
                                     noteType = {this.props.noteType}
                                     isAdded={this.state.isAdded}
                                     childNum={this.state.childNum+1}
        />);
        this.setState({...this.state, children: [...children], childNum: this.state.childNum + 1});

    }

    deleteChild = (ind, head_id) => {
        if (this.state.headingIds.indexOf(head_id) > -1) {
            this.state.headingIds = this.removeItemOnce(this.state.headingIds, head_id);
            this.state.headingsText = this.removeItemOnce(this.state.headingsText, head_id);
            this.state.headingsContent = this.removeItemOnce(this.state.headingsContent, head_id);
        }
        let children = [];
        this.state.children.forEach((value, index) => {
            if (index !== ind) {
                children.push(value);
            }
        })
        this.setState({...this.state, children: [...children], childNum: this.state.childNum - 1});
    }

    addChild = () => {
        if (this.state.childNum === 4) {
            return;
        }
        let children = this.state.children;
        children.push(<ChildHeadings key={this.state.childNum+1} number={this.state.childNum+1} id={'temp' + this.state.childNum+1}
                                     setHeadingWithContent = {this.setHeadingWithContent}
                                     handleTemporaryHeading = {this.handleTemporaryHeading}
                                     saveTempHeadings = {this.saveTempHeadings}
                                     noteType = {this.props.noteType}
                                     isAdded={this.state.isAdded}
                                     deleteChild={this.deleteChild}
                                     childNum={this.state.childNum}
        />);
        this.setState({...this.state, children: [...children], childNum: this.state.childNum + 1});
    }

    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    setEditMode = async (id) => {
        await this.setState({isInEditMode: true});
        await this.setState({headingId: id});
    }

    disableEditModeAndSave = (id, noteType) => {
        this.setState({isInEditMode: false});
        this.setState({headingId: ''});
        let headText = (this.state.headingsText[id] ? this.state.headingsText[id] : '');
        let headContent = (this.state.headingsContent[id] ? this.state.headingsContent[id] : '');
        saveHeading(headText, headContent, noteType, id).then(response => {
            this.props.setHeadingWithContent(response.data.success);
        });
    }

    saveTempHeadings = (id, noteType) => {
        let headText = (this.state.headingsText[id] ? this.state.headingsText[id] : '');
        let headContent = (this.state.headingsContent[id] ? this.state.headingsContent[id] : '');
        saveHeading(headText, headContent, noteType, id).then(response => {
            this.props.setHeadingWithContent(response.data.success);
        });
    }

    handleHeading = async (id, headingText, headingContent) => {
        if (this.state.headingIds.indexOf(id) > -1) {
            this.state.headingIds = this.removeItemOnce(this.state.headingIds, id);
        } else {
            this.state.headingIds.push(id);
        }

        if (headingText === '') {
            if (this.state.headingsText[id] === '' ||
                this.state.headingsText[id] === undefined ) {
                return;
            }
        }
        if (headingContent === '') {
            if (this.state.headingsContent[id] === '' || this.state.headingsContent[id] === undefined ) {
                return;
            }
        }
        if (this.state.headingsText[id] == null || this.state.headingsText[id] == '') {
            this.state.headingsText[id] = headingText;
        }
        if (this.state.headingsContent[id] == null || this.state.headingsContent[id] == '') {
            this.state.headingsContent[id] = headingContent;
        }
        await this.props.setHeadingIdsArr(this.state.headingIds);
        await this.props.setHeadingTextArr(this.state.headingsText);
        await this.props.setHeadingContentArr(this.state.headingsContent);
    }

    handleTemporaryHeading = async (id) => {
        if (this.state.headingIds.indexOf(id) > -1) {
            this.state.headingIds = this.removeItemOnce(this.state.headingIds, id);
        } else {
            this.state.headingIds.push(id);
        }
        if (this.state.headingsText[id] === undefined || this.state.headingsContent[id] === undefined) {
            return;
        }
        await this.props.setHeadingIdsArr(this.state.headingIds);
        await this.props.setHeadingTextArr(this.state.headingsText);
        await this.props.setHeadingContentArr(this.state.headingsContent);
    }

    deleteHeading = (id) => {
        deleteHeadingById(id).then( response => {
                this.props.setHeadingWithContent(response.data.success)
            }
        );
    }

    addTempHeading = () => {
        if (this.state.numChildren < 4) {
            this.setState({numChildren: this.state.numChildren + 1});
        }
    }

    setHeadingWithContent = (e, hid) => {
        this.setState({isWriting: true});
        if (e.target.value == '') {
            this.setState({isWriting: false});
        }
        if (e.target.className === 'form-control headingText') {
            this.state.headingsText[hid] = e.target.value;
        } else {
            this.state.headingsContent[hid] = e.target.value;
        }
    }

    render() {
        const { headings, setHeadingWithContent, headingContent, noteType,
            setHeadingIdsArr, setHeadingContentArr, setHeadingTextArr} = this.props;
        return (
          <React.Fragment>
              <div className="col-md-2">
                  <h1> H </h1>
              </div>
              <div className="col-md-10 pull-right">
                  <h2>Add Headers</h2>
                  <p>If you wish to add headings to the top of this note, such as Diagnosis, Session Time, or Billing
                      Code, you can do so here.</p>
                  <p>Type your own headings below, then use the +/- buttons to add them to the current note. If you
                      wish to save all of these headings so you can use them in future <strong>progress notes AND
                          treatment plans,</strong> click 'Save' button next to the heading: </p>
              </div>
              <div className="clearfix"></div>
              <div className="container-fluid b-t">
                  <h2>Temporary Headings</h2>
                  <div className="row m-b-5">
                      <div className="col-md-4">
                          <h4>Heading</h4>
                      </div>
                      <div className="col-md-6">
                          <h4>Content for current note</h4>
                      </div>
                      <div className="col-md-2">
                          <div className="d-flex align-items-center">
                              <button className="btn btn-sm btn-info" data-toggle="tooltip" data-placement="top"
                                      title="" id="btnAddRemoveAllTemporaryHeadings"
                                      data-original-title="Add/Remove all headings from note"
                                      aria-describedby="tooltip445165"> +/-
                              </button>
                              &nbsp;<span>(all)</span></div>
                      </div>
                  </div>
                  {this.state.children}
                  <button className="btn btn-sm btn-info" id="btnAddAnotherHeading"
                        onClick={() => {
                            this.addChild()
                        }}>
                      <i className="fa fa-plus"></i>
                      Add another heading
                  </button>
              </div>
              <div className="container-fluid b-t">
                  <h2>Saved Headings</h2>
                  <div className="row m-b-5">
                      <div className="col-md-4">
                          <h4>Heading</h4>
                      </div>
                      <div className="col-md-6">
                          <h4>Content for current note</h4>
                      </div>
                      <div className="col-md-2">
                          <div className="d-flex align-items-center">
                              <button className="btn btn-sm btn-info" data-toggle="tooltip" data-placement="top"
                                      title="" data-original-title="Add/Remove all headings from note"
                                      aria-describedby="tooltip445165"> +/-
                              </button>
                              &nbsp;<span>(all)</span></div>
                      </div>
                  </div>
                  { headings.map((heading, index) => (
                      <div className="row m-b-5" key={index}>
                          <div className="col-md-4">
                              <textarea
                                  className={"form-control headingText"}
                                  disabled = {(this.state.isInEditMode && this.state.headingId === heading.id) ? "" : "disabled"}
                                  rows="1"
                                  onChange={(e) => {
                                      this.setHeadingWithContent(e, heading.id);
                                  }}
                                  value={(!this.state.headingsText[heading.id]) ? heading.heading_text: this.state.headingsText[heading.id]}
                              >
                              </textarea>
                          </div>
                          <div className="col-md-6">
                              <textarea
                                  className={"form-control headingContent"}
                                  rows="1"
                                  onChange={(e) => {
                                      this.setHeadingWithContent(e, heading.id);
                                  }}
                                  value={(!this.state.headingsContent[heading.id]) ? heading.heading_content: this.state.headingsContent[heading.id]}
                              >

                              </textarea>
                          </div>
                          <div className="col-md-2">
                              <div className="btn-group" role="group">
                                  <div title="Add/Remove heading from current note">
                                      <div className="input-group-append flex-column btn-group-toggle pull-left"
                                           data-toggle="buttons">
                                              <button type="button" name="checkboxTemporaryHeadings[]"
                                                      className={`btn btn-sm btn-info btnSave pull-left ${!this.state.isAdded ? 'introSelected' : ''}`}
                                                      autoComplete="off"
                                                      onClick={() => this.handleHeading(heading.id, heading.heading_text, heading.heading_content)}>
                                              <i className="fa fa-adjust"></i>
                                              </button>
                                      </div>
                                  </div>
                                  {!this.state.isInEditMode && <button type="button" className="btn btn-sm btn-warning btnSave pull-left"
                                           title="Save heading for later use" onClick={() => {
                                      this.setEditMode(heading.id)}}>
                                      <i className="fa fa-edit"></i></button>
                                  }

                                  {this.state.isInEditMode && this.state.headingId !== heading.id && <button type="button" className="btn btn-sm btn-warning btnSave pull-left"
                                           title="Save heading for later use" onClick={() => {
                                      this.setEditMode(heading.id)}}>
                                      <i className="fa fa-edit"></i></button>
                                  }

                                  {this.state.isInEditMode && this.state.headingId === heading.id &&
                                        <button type="button" className="btn btn-sm btn-success btnSave pull-left"
                                        title="Save heading for later use"
                                        disabled = {(this.state.isWriting && this.state.headingId === heading.id) ? "" : "disabled"}
                                        onClick={() => {
                                        this.disableEditModeAndSave(heading.id, noteType)}}><i className="fa fa-save"></i></button>
                                  }

                                  <button type="button" className="btn btn-sm btn-danger pull-left"
                                          title="Delete heading"
                                          onClick={() => {
                                          this.deleteHeading(heading.id)}}><i className="fa fa-trash-o"></i></button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </React.Fragment>
        );
    }
}

export default Heading;
