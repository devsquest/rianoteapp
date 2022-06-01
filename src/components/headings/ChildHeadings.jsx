import React, {Component} from "react";

class ChildHeadings extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row m-b-5">
                    <div className="col-md-4">
                          <textarea
                              className="form-control headingText"
                              rows="1"
                              onChange={(e) => {
                                  this.props.setHeadingWithContent(e, this.props.id);
                              }}
                          >

                          </textarea>
                    </div>
                    <div className="col-md-6">
                          <textarea
                              className="form-control"
                              rows="1"
                              onChange={(e) => {
                                  this.props.setHeadingWithContent(e, this.props.id);
                              }}>
                          </textarea>
                    </div>
                    <div className="col-md-2">
                        <div className="btn-group" role="group">
                            <div title="Add/Remove heading from current note">
                                <div className="input-group-append flex-column btn-group-toggle pull-left"
                                     data-toggle="buttons">
                                        <button type="button" name="checkboxTemporaryHeadings[]"
                                                className={`btn btn-sm btn-info btnSave pull-left ${!this.props.isAdded ? 'introSelected' : ''}`}
                                                onClick={() => this.props.handleTemporaryHeading(this.props.id)}>
                                            <i className="fa fa-adjust"></i>
                                        </button>
                                </div>
                            </div>
                            <button type="button" className="btn btn-sm btn-success btnSave pull-left"
                                    title="Save heading for later use"
                                    onClick={() => {
                                        this.props.saveTempHeadings(this.props.id, this.props.noteType)}}
                            ><i className="fa fa-save"/></button>
                            {this.props.number > 0 && <button type="button" className="btn btn-sm btn-danger pull-left"
                                    title="Delete heading"
                            onClick={ (this.props.deleteChild) ? () => {
                                this.props.deleteChild(this.props.childNum, this.props.id)} : '' }><i className="fa fa-trash-o"/></button>
                            }
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default ChildHeadings;