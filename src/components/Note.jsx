import React, {Component, useState} from "react";

import NoteSideNav from "./common/NoteSidenav";
import NoteContent from "./notes/NoteContent";
import NoteRightSide from "./common/NoteRightSide";
import { getSectionsByType, getNotes } from "../services/noteService";
import { getHeadingsByType } from "../services/headingService";
import { getQuestionsWithOptions } from "../services/questionService";
import Modal from "./common/modal";
import Preference from "./common/preferenceModal";
import FinalEdit from "./common/FinalEditModal";
import HelpContent from "./helpContent";
import PreferenceContent from "./preferenceContent";
import FinalEditContent from "./finalEditContent";
import { Link } from "react-router-dom";
import Type from "./type";
import {saveOptionWithId} from "../services/optionService";
import SubItems from "./common/SubItem";
import QuestionWithMultiOptions from "./notes/QuestionWithMultiOptions";

class Note extends Component {
  state = {
    notes: [],
    noteType: {},
    sections: [],
    questions: {},
    headings: [],
    selected: { id: 1 },
    childSelected: 1,
    subSelected: 6,
    qiestionWithOptions:[{_id:"",question:"",options:""}],
    pname: null,
    pdate: null,
    sessionFee: null,
    startTime: null,
    endTime: null,
    introComment: '',
    closingComment: '',
    headingContent: [],
    content: [],
    quesWithMultiOption : [],
    headingsIdArr: [],
    headingsTextArr: [],
    headingsContentArr: []
  };

  async componentDidMount() {
    const id = this.props.match.params.type;
    const { data: notes } = await getNotes();
    const { data: sections } = await getSectionsByType(id);
    const { data: questions } = await getQuestionsWithOptions(
      this.state.subSelected
    );
    const { data: headings } = await getHeadingsByType(id);

    this.setState({ notes: notes["success"] });
    await this.setState({ ...this.state, noteType: id });
    this.setState({ sections: sections["success"] });
    this.setState({ headings: headings["success"] });
    this.setState({ ...this.state, questions: questions["success"] });
  }

  handleContent = async (content) => {
    await this.setState({...this.state, content: [...content]})
  }

  handleSectionQuestions= async (id) =>{
    const {questions} = this.state;
    const { data: qts } = await getQuestionsWithOptions(
      id
    );
    this.setState({ ...this.state, questions: qts["success"] });
    await this.setState({...this.state, subSelected: id});
    }

  handleType = async (type) => {
    await this.setState({ ...this.state, noteType: type });
  };

  handleHeadingIds = async (headingsIdArr) => {
    await this.setState({...this.state, headingsIdArr: headingsIdArr})
  }
  handleHeadingText = async (headingsTextArr) => {
    await this.setState({...this.state, headingsTextArr: headingsTextArr})
  }
  handleHeadingContent = async (headingsContentArr) => {
    await this.setState({...this.state, headingsContentArr: headingsContentArr})
  }

  handleName = (name) => {
    this.setState({...this.state, pname: name})
  }
  handleDate = (date) => {
    this.setState({...this.state, pdate: date})
  }
  handleStartTime = (startTime) => {
    this.setState({...this.state, startTime: startTime})
  }
  handleEndTime = (endTime) => {
    this.setState({...this.state, endTime: endTime})
  }
  handleSessionFee = (sessionFee) => {
    this.setState({...this.state, sessionFee: sessionFee})
  }
  handleIntroComment = (introComment) => {
    this.setState({...this.state, introComment: introComment})
  }
  handleClosingComment = (closingComment) => {
    this.setState({...this.state, closingComment: closingComment})
  }

  handleHeadingWithContent = async (headingContent) => {
    await this.setState({...this.state, headings: headingContent})
  }

  handleSelected = async (section) => {
    await this.setState({...this.state, selected: section});
    await this.setState({...this.state, subSelected: (section.children && section.children[0] ?
    section.children[0].id : 6)});
    const { data: questions } = await getQuestionsWithOptions(
        this.state.subSelected
    );
    await this.setState({...this.state, questions: questions["success"]});
  }

  handleQuesWithMultiOption = async (quesWithMultiOption) => {
    await this.setState({...this.state, quesWithMultiOption: [...quesWithMultiOption]});
  }

  handleSelection = () => {
    let { noteType } = this.state;
    noteType = {};
    this.setState({ noteType });
  };

  handleSubSelection = (childSelection) => {
    this.setState({...this.state, childSelected: childSelection})
  };

  goNote = () => {
    const { noteType } = this.state;
    const url = noteType ? "/" + noteType : "";
    window.location = "/note" + url;
  };
  render() {
    const {questions, childSelected, subSelected, selected, sections, notes, noteType} = this.state;
    return (
      <React.Fragment>
        <div id="page-wrapper">
          <div className="container-fluid">
            <NoteContent
                pname={this.state.pname} setName={this.handleName}
                pdate={this.state.pdate} setDate={this.handleDate}
                startTime={this.state.startTime} setStartTime={this.handleStartTime}
                endTime={this.state.endTime} setEndTime={this.handleEndTime}
                sessionFee={this.state.sessionFee} setSessionFee={this.handleSessionFee}
                introComment={this.state.introComment} setIntroComment={this.handleIntroComment}
                closingComment={this.state.closingComment} setClosingComment={this.handleClosingComment}
            />
          </div>
          <div className="row" id="tab">
            <NoteSideNav
              questions={this.state.questions}
              headings={this.state.headings}
              sections={sections}
              selected={selected}
              childSelected={childSelected}
              subSelected={subSelected}
              loadQuestionsWithOptions={this.handleSectionQuestions}
              setSeleted = {this.handleSelected}
              setSubSeleted = {this.handleSubSelection}
              pname={this.state.pname}
              pdate={this.state.pdate}
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              sessionFee={this.state.sessionFee}
              introComment={this.state.introComment}
              closingComment={this.state.closingComment}
              setHeadingContent={this.handleHeadingWithContent}
              headingContent={this.state.headingContent}
              noteType={noteType}
              content={this.state.content}
              setContent = {this.handleContent}
              quesWithMultiOption = {this.state.quesWithMultiOption}
              handleQuesWithMultiOption= {this.handleQuesWithMultiOption}
              headingIdsArr={this.state.headingsIdArr}
              headingTextArr={this.state.headingsTextArr}
              headingContentArr={this.state.headingsContentArr}
              setHeadingIdsArr={this.handleHeadingIds}
              setHeadingTextArr={this.handleHeadingText}
              setHeadingContentArr={this.handleHeadingContent}
            />
          </div>
          <Modal
              modalid="help"
              title="Help with Note Designer
              Get Started"
              content=<HelpContent />
          />
          <Preference
              modalid="preference"
              title="Preferences and Advanced Options"
              content=<PreferenceContent />
          />
          <FinalEdit
              modalid="finalEdit"
              title="Final Content"
              fcontent=<FinalEditContent
                selected={this.state.selected}
                questions={this.state.questions}
                content={this.state.content}
                noteType={this.state.noteType}
                pname={this.state.pname}
                pdate={this.state.pdate}
                startTime={this.state.startTime}
                endTime={this.state.endTime}
                sessionFee={this.state.sessionFee}
                introComment={this.state.introComment}
                closingComment={this.state.closingComment}
                headingIdsArr={this.state.headingsIdArr}
                headingTextArr={this.state.headingsTextArr}
                headingContentArr={this.state.headingsContentArr}
                />
                />
        <div
              className="modal fade"
              id="responsive-modal"
              tabIndex="-1"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Start a new note</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div className="modal-body">
                  <p>Choose Note Type:</p>
                  <form>
                    {notes.map((note) => (
                        <div className="checkbox checkbox-info checkbox-circle" key={note.id}>
                          <input id={note.id} type="checkbox" name="notes"
                                 onClick={() => this.handleType(note.id)}/>
                          <label htmlFor={note.id}>{note.name}</label>
                        </div>
                    ))}
                  </form>
                  <p> Notice: the content of the current note will be discarded if you choose to open a new note on the current tab.</p>
                </div>
                <div className="modal-footer note-modal">
                  <button type="button"
                          className="btn btn-warning waves-effect waves-light"
                          onClick={this.goNote}>
                    Discard current note and start a new note
                  </button>
                  <button type="button"
                          className="btn btn-info waves-effect waves-light">
                    Keep current note active and start a new note in a new browser tab
                  </button>
                  <button type="button" className="btn btn-default waves-effect"
                          data-dismiss="modal"
                          onClick={this.handleSelection}
                  >Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Note;
