import React, { Component } from "react";
import { Link } from "react-router-dom";
class LeftItems extends Component {
  render() {
    const { section, sid, index, selectedType, selectedSubType, getSectionQuestions } = this.props;
    const devId = "#" + section.name;
    return (
      <React.Fragment>
        <li
            key={sid}
            role="presentation"
            onClick={() => selectedType(section)}
            className={this.getClasses()}
        >
            <a href={"#"+section.name} aria-controls="headings" role="tab"
               data-toggle="tab" aria-expanded="true" data-target={devId}>
              <span className="visible-xs">
                <i className="ti-home"/>
              </span>
              <span className="hidden-xs"> {section.name}
              </span>
            </a>
        </li>
      </React.Fragment>
    );
  }

  getClasses() {
    const { section, index, selected } = this.props;
    let classes = "";
    classes += index === selected.id - 1 ? "active" : "";
    return classes;
  }
}

export default LeftItems;
