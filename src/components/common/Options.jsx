import React, {useState} from "react";
import { saveOptionWithId } from "../../services/optionService"

const Options = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [optionText, setOptionText] = useState(props.option.option_text);
    const saveOption = async (id) => {
        await saveOptionWithId(id, optionText).then(async response => {
             await setOptionText(response.data.option_text);
        });
        setEditMode(false);
    }

    const selectOpt = (typ, ques, optText, setContnt, optId) => {
        if (props.isSelectedOption === optId) {
            props.handleSelectedOption(null);
            props.selectOption(typ, ques, null, setContnt);
        } else {
            props.handleSelectedOption(optId);
            props.selectOption(typ, ques, optText, setContnt);
        }
    }

    return (
        <div className="txtbox">
            {!editMode && (props.isSelectedOption !== props.option.id) && <p
                onClick={() => selectOpt(props.type, props.question, props.option_text, props.setContent, props.option.id)}
            >
                {optionText}
            </p>}
            {!editMode && (props.isSelectedOption === props.option.id) && <p className={"introSelected"}
                onClick={() => selectOpt(props.type, props.question, props.option_text, props.setContent, props.option.id)}
            >
                {optionText}
            </p>}
            {
                editMode === true &&
                <textarea
                    className="custom-input"
                    defaultValue={optionText}
                    onChange={(e) => {
                        setOptionText(e.target.value);
                    }}
                />
            }
            <div className="text-controls">
                {!editMode && <button type="button" className="btn btn-info btn-edit" data-toggle="tooltip" data-placement="bottom"
                        title="" data-original-title="" onClick={() => setEditMode(true)}><i className="fa icon-note"/></button>}
                {editMode && <button type="button" className="btn btn-success btn-save" data-toggle="tooltip" data-placement="bottom"
                        title="" data-original-title="" onClick={() => saveOption(props.option.id)}><i className="fa fa-save"/></button>}
                {editMode && <button type="button" className="btn btn-warning" data-toggle="tooltip" data-placement="bottom" title=""
                        data-original-title="" onClick={() => setEditMode(false)}><i className="fa fa-times"/></button>}
            </div>
        </div>
    )
}

export default Options;