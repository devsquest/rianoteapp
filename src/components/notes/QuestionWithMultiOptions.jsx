import React, {Component, useState} from "react";
import { Link } from "react-router-dom";
import {saveOptionWithId} from "../../services/optionService";
class QuestionWithMultiOptions extends Component {
  state = {
    isInEditMode: false,
    optionText: '',
    optionId: ''
  }

  selectOpt = (typ, ques, option, optId, setContent) => {
    if (this.props.quesWithMultiOption[option.id]) {
      this.props.quesWithMultiOption[option.id] = '';
    } else {
      this.props.quesWithMultiOption[option.id] = option.option_text;
    }
    this.props.handleQuesWithMultiOption(this.props.quesWithMultiOption);
    this.props.selectOption(typ, ques, option.option_text, optId, setContent);
  }

  setEditMode = (id) => {
    this.setState({isInEditMode: !this.state.isInEditMode});
    this.setState({optionId: id});
  }

  setOptionText = (optionText) => {
    this.setState({optionText: optionText})
  }

  saveOption = (id) => {
    saveOptionWithId(id, this.state.optionText).then(response => {
      this.setOptionText(response.data.option_text);
    });
  }

  render() {
    const { question, key, index, selectOption, setContent } = this.props;
    const type = question.question_type;
    const option = question.options
    return (
      <React.Fragment>
        <div>
          <b>{question.question_text}</b>
        </div>
        {question.options ? (
          <div className="row m-2">
            {option.map((option) => (
              <div className="col-md-6"
                   onDoubleClick={() => this.selectOpt(type, question, option, index, setContent)}
              >
                <div className={`txtbox ${this.props.quesWithMultiOption[option.id] ? 'selectedOption' : ''}`}>
                  { !this.state.isInEditMode && this.state.optionText === '' && <p>{ option.option_text}</p>}
                  { !this.state.isInEditMode && this.state.optionText !== '' && this.state.optionId === option.id && <p>{ this.state.optionText }</p>}
                  { !this.state.isInEditMode && this.state.optionText !== '' && this.state.optionId !== option.id && <p>{ option.option_text }</p>}

                  { this.state.isInEditMode === true && this.state.optionText === '' && this.state.optionId === option.id &&
                    <textarea
                        className="custom-input-multi"
                        defaultValue={option.option_text}
                        onChange={(e) => {
                          this.setOptionText(e.target.value);
                        }}
                    />
                  }

                  { this.state.isInEditMode === true && this.state.optionText !== '' && this.state.optionId === option.id &&
                    <textarea
                        className="custom-input-multi"
                        defaultValue={this.state.optionText}
                        onChange={(e) => {
                          this.setOptionText(e.target.value);
                        }}
                    />
                  }

                  { this.state.isInEditMode === true && this.state.optionText === '' && this.state.optionId !== option.id &&
                  <p>{ option.option_text}</p>
                  }
                  { this.state.isInEditMode === true && this.state.optionText !== '' && this.state.optionId !== option.id &&
                  <p>{ option.option_text}</p>
                  }

                  <div className="text-controls">
                    {!this.state.isInEditMode && <button type="button" className="btn btn-info btn-edit" data-toggle="tooltip"
                            data-placement="bottom" title="" data-original-title="" onClick={() => this.setEditMode(option.id)}>
                      <i className="fa icon-note"/>
                    </button>}

                    {this.state.isInEditMode && this.state.optionId === option.id && <button type="button" className="btn btn-success btn-save" data-toggle="tooltip"
                            data-placement="bottom" title="" data-original-title=""
                            onClick={() => this.saveOption(option.id)}><i className="fa fa-save"/>
                    </button>}

                    {this.state.isInEditMode && this.state.optionId === option.id && <button type="button" className="btn btn-warning" data-toggle="tooltip" data-placement="bottom"
                            title="" data-original-title="" onClick={() => this.setState({isInEditMode: false})}><i className="fa fa-times"/></button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default QuestionWithMultiOptions;
