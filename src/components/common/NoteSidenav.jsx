import React, { Component } from "react";
import LeftItems from "./LeftItem";
import SubItems from "./SubItem";
import NoteRightSide from "./NoteRightSide";
import QuestionWithMultiOptions from "../notes/QuestionWithMultiOptions";

class NoteSideNav extends Component {
    // state = {
    //     headingsIdArr: [],
    //     headingsTextArr: [],
    //     headingsContentArr: []
    // };
    //
    // handleHeadingIds = async (headingsIdArr) => {
    //     await this.setState({...this.state, headingsIdArr: headingsIdArr})
    // }
    // handleHeadingText = async (headingsTextArr) => {
    //     await this.setState({...this.state, headingsTextArr: headingsTextArr})
    // }
    // handleHeadingContent = async (headingsContentArr) => {
    //     await this.setState({...this.state, headingsContentArr: headingsContentArr})
    // }

  handleType = (section) => {
    let { selected } = this.props;
    this.props.setSeleted(section);
    this.setState({ selected: section });
  };

  handleSubType = (section) => {
    let { childSelected } = this.props;
    this.props.setSubSeleted(section);
    childSelected = section;
    this.setState({ childSelected });
  };

  render() {
    const { sections, selected, childSelected, subSelected, loadQuestionsWithOptions, questions, headings,
        noteType, pname, pdate, startTime, endTime, sessionFee, introComment, closingComment,
        setHeadingContent, headingContent, content, setContent, headingIdsArr, headingContentArr, headingTextArr } = this.props;
      return (
        <div className="col-md-12">
            <div className="white-box">
                <div className="row">
                    <div className="col-md-7">
                        <ul className="nav customtab2 nav-tabs" role="tablists">
                            {sections.map((section, index) => (
                                <LeftItems
                                    key={index}
                                    sid={section.id}
                                    section={section}
                                    index={index}
                                    selected={selected}
                                    childSelected={childSelected}
                                    subSelected={subSelected}
                                    selectedType={this.handleType}
                                    selectedSubType={this.handleSubType}
                                    getSectionQuestions = {loadQuestionsWithOptions}
                                />
                            ))}
                        </ul>
                        <div className="slimScrollDiv" style={{position: 'relative', overflow: 'hidden', width: 'auto', height: '550px'}}>
                            <div className="tab-content" id="slimtest5" style={{position: 'relative', overflow: 'scroll', width: 'auto', height: '550px'}}>
                                {sections.map((section, index) => (
                                    <SubItems
                                        questions = {this.props.questions}
                                        headings = {this.props.headings}
                                        key={index}
                                        section={section}
                                        index={index}
                                        selected={selected}
                                        childSelected={childSelected}
                                        subSelected={subSelected}
                                        selectedType={this.handleType}
                                        selectedSubType={this.handleSubType}
                                        getSectionQuestions = {loadQuestionsWithOptions}
                                        setContent = {setContent}
                                        content={content}
                                        setHeadingWithContent = {setHeadingContent}
                                        headingContent={headingContent}
                                        noteType={noteType}
                                        setHeadingIdsArr={this.props.setHeadingIdsArr}
                                        setHeadingTextArr={this.props.setHeadingTextArr}
                                        setHeadingContentArr={this.props.setHeadingContentArr}
                                        quesWithMultiOption = {this.props.quesWithMultiOption}
                                        handleQuesWithMultiOption= {this.props.handleQuesWithMultiOption}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <NoteRightSide selected={selected}
                                   questions={questions}
                                   content={content}
                                   noteType={noteType}
                                   pname={pname}
                                   pdate={pdate}
                                   startTime={startTime}
                                   endTime={endTime}
                                   sessionFee={sessionFee}
                                   introComment={introComment}
                                   closingComment={closingComment}
                                   headingIdsArr={headingIdsArr}
                                   headingTextArr={headingTextArr}
                                   headingContentArr={headingContentArr}
                    />
                </div>
            </div>

        </div>
    );
  }
}

export default NoteSideNav;
