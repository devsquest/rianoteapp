import React, { Component } from "react";
import Options from "./Options";

class QuestionOPtions extends Component {
    render() {
        const { question, key, index, selectOption, setContent,
            isSelectedOption, handleSelectedOption} = this.props;
        const type = question.question_type;
        return (
          <React.Fragment>
            <div>
                <h4>{question.question_text}</h4>
            </div>
              { question.options ?
                  question.options.map((option, ind) => (
                          <Options option_text = { option.option_text }
                                   type = { type }
                                   key = {ind}
                                   selectOption = { selectOption }
                                   question = { question }
                                   option = { option }
                                   setContent = { setContent }
                                   isSelectedOption = {isSelectedOption}
                                   handleSelectedOption = {handleSelectedOption}
                          />
                      ))
                  : ("")
              }
          </React.Fragment>
        );
    }
}

export default QuestionOPtions;
