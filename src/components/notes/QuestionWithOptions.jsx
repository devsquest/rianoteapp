import React, { Component } from "react";
import reactStringReplace from 'react-string-replace';
class QuestionWithOptions extends Component {

    selectOpt = (typ, ques, optText, optId) => {
        this.props.quesWithOption[ques.id] = optId;
        this.props.handleQuesWithOption(this.props.quesWithOption);
        this.props.selectOption(typ, ques, optText);
    }

  render() {
    const { question, key, index, selectOption, handleQuesWithOption, quesWithOption } = this.props;
    const questionText = question.question_text;
    const option = question.options;

    const finalContent = reactStringReplace(questionText,'*|option_text|*', (match, i) => (
        <div className="btn-group-toggle" data-toggle="buttons">
        {option.map((item, index) => (
            <label
                className={`btn btn-info mt-2 mb-2 ml-1 ${quesWithOption[question.id] === item.id? 'selectedOption' : ''}`}
                onClick={() => this.selectOpt(type, question, item.option_text, item.id)}>
                  { item.option_text }
            </label>
        ))}
         <label className="btn btn-clear btn-danger ml-1" onClick={() => this.selectOpt(type, question, '')}>
            <i className="fa fa-times"/>
         </label>
         </div>
      ));

    const type = question.question_type;
    return (
      <React.Fragment>
        <div className="txtbox">
            {finalContent}
        </div>
      </React.Fragment>
    );
  }
}

export default QuestionWithOptions;
