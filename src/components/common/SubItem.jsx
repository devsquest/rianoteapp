import React, { Component } from "react";
import QuestionOPtions from "./QuestionOptions";
import QuestionWithMultiOptions from "../notes/QuestionWithMultiOptions";
import QuestionWithOption from "../notes/QuestionWithOptions";
import reactStringReplace from "react-string-replace";
import { IconButton, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import { SearchSharp } from "@material-ui/icons";
import Heading from "../headings/Heading";
class SubItems extends Component {
    state = {
        name: "",
        date: "",
        start_time: "",
        end_time: "",
        fee: "",
        start_comments: "",
        end_comments: "",
        isSelectedOption : null,
        quesWithOption : []
    };

    handleSelectedOption = (id) => {
        this.setState({isSelectedOption: id});
    }

    handleQuesWithOption = async (quesWithOption) => {
        await this.setState({...this.state, quesWithOption: [...quesWithOption]});
    }


    handleOption = (type, question, option, id) => {
        const content = this.props.content;
        const qid = question.id;
        if (type == 'Text' && question.selection_type == 'Single') {
            content[qid] = option;
        } else if (type == 'Tags') {
            let c = reactStringReplace(question.question_text,'*|option_text|*', (match, i) => (option))
            content[qid] = c;
            if (option === '') {
                content[qid] = null;
            }
        } else if (type == 'Text' && question.selection_type == 'Multiple') {
            let c = this.props.quesWithMultiOption;
            let alreadyExist = true;
            content[qid] = '';
            if (content[qid]) {
                alreadyExist = false;
            }

            {question.options.map((opt) => (
                ( c[opt.id] && c[opt.id] !== '' ?
                    content[qid] = content[qid] + c[opt.id] + ', '
                    :
                '')
            ))}

            if (alreadyExist) {
                content[qid] = question.question_text + ' ' + content[qid];
                content[qid] = content[qid].replace(/,\s*$/, "") + '.';
            }

            if (content[qid] == question.question_text + ' .') {
                content[qid] = '';
            }
        }
        this.props.setContent(content);
        this.setState({id});
    };

    SwitchCase = (question, index, setContent) => {
        switch (question.question_type) {
            case 'Text' :
                switch (question.selection_type) {
                    case 'Single':
                        return (
                            <QuestionOPtions
                                key={index}
                                question={question}
                                index={index}
                                selectOption={this.handleOption}
                                setContent={setContent}
                                isSelectedOption = {this.state.isSelectedOption}
                                handleSelectedOption = {this.handleSelectedOption}
                            />
                        );
                    case 'Multiple':
                        return (
                            <QuestionWithMultiOptions
                                key={question.id}
                                question={question}
                                index={index}
                                selectOption={this.handleOption}
                                setContent={setContent}
                                quesWithMultiOption = {this.props.quesWithMultiOption}
                                handleQuesWithMultiOption= {this.props.handleQuesWithMultiOption}
                            />
                        );
                }
                break;

            case 'Tags':
                return (
                    <QuestionWithOption
                        key={question.id}
                        question={question}
                        index={index}
                        selectOption={this.handleOption}
                        quesWithOption = {this.state.quesWithOption}
                        handleQuesWithOption= {this.handleQuesWithOption}
                    />
                );

            default:
                return (
                    <QuestionOPtions
                        key={question.id}
                        question={question}
                        index={index}
                        selectOption={this.handleOption}
                        isSelectedOption = {this.state.isSelectedOption}
                        handleSelectedOption = {this.handleSelectedOption}
                    />
                );
        }
    };

    render() {
        const { questions, headings, section, key, index, selected, selectedType, selectedSubType,
            getSectionQuestions, setContent, content, setHeadingWithContent, headingContent, noteType,
            setHeadingIdsArr, setHeadingTextArr, setHeadingContentArr} = this.props;
        const devId = "#" + section.name;
        return (
            <React.Fragment>
                    {section.name !== 'Headings' ?
                        <div className={this.getCollapse(index)} id={devId}>
                            <div className="col-md-3">
                                <div className="vtabs">
                                    <ul className="nav tabs-vertical">
                                          {section.children.map((item, ind) => (
                                              <li
                                                  key={ind}
                                                  onClick={() => getSectionQuestions(item.id)}
                                                  className={ "tab " + this.getSubClasses(item.id)}>
                                                  <a href={"#sub"+item.id} data-toggle="tab" aria-expanded="true">
                                                      <span className="visible-xs">
                                                        <i className="ti-home"/>
                                                        </span>
                                                      <span className="hidden-xs"> {item.name}</span>
                                                  </a>
                                              </li>
                                          ))}
                                        </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="tab-content tab-display">
                                    <form className="form-group" role="search">
                                        <div className="input-group">
                                            <TextField className="outlined-search"
                                                       label="Search"
                                                       type="search"
                                                       variant="outlined"
                                                       style={{backgroundColor: 'white'}}
                                                       fullWidth
                                                       InputProps={{
                                                           endAdornment: (
                                                               <InputAdornment position="end">
                                                                   <IconButton
                                                                       edge="end"
                                                                   >
                                                                       <SearchSharp />
                                                                   </IconButton>
                                                               </InputAdornment>
                                                           )
                                                       }}
                                            />
                                        </div>
                                    </form>
                                    {questions && questions[0] && questions.map((question, index) => {
                                        return <div id={"sub"+question.section_id} key={index}>
                                            {
                                                this.SwitchCase(question, index, setContent)
                                            }
                                        </div>
                                    })}
                                    <h4>
                                        Customized Phrases:
                                    </h4>
                                    <p>
                                        There are currently no customized phrases for this tab.
                                    </p>
                                    <button className="btn btn-info btn-sm btn-add-option"><i className="fa fa-plus"/> Add your own custom
                                        phrase
                                    </button>
                                    <button className="btn btn-success btn-sm btn-add-shared-custom-phrases" data-toggle="tooltip"
                                            data-placement="right" title="" data-original-title=""><i className="fa fa-plus"/> Add new
                                        custom phrases from ND
                                    </button>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div> :
                        <div className={this.getCollapse(index) } id={devId}>
                            <Heading
                                headings = {headings}
                                setHeadingWithContent = {setHeadingWithContent}
                                headingContent = {headingContent}
                                noteType={noteType}
                                setHeadingIdsArr={setHeadingIdsArr}
                                setHeadingTextArr={setHeadingTextArr}
                                setHeadingContentArr={setHeadingContentArr}
                            />
                        </div>
                    }
            </React.Fragment>
        );
    }

    getClasses() {
        const { section, index, selected } = this.props;
        let classes = "";
        classes += index === selected.id - 1 ? "active" : "";
        return classes;
    }

    getCollapse(id) {
        const { selected } = this.props;
        let subclass = "tab-pane";
        // console.log(id);
        subclass += id === (selected.id - 1)  ? " active in" : "";
        return subclass;
    }

    getSubClasses(id) {
        const { subSelected } = this.props;
        let subclass = "";
        subclass += id === subSelected ? "active" : "";
        return subclass;
    }
}

export default SubItems;
