import React, { Component } from "react";
import TopNoteInput from "./TopNoteInput";

class NoteTop extends Component {
  render() {
    const {
      changeTopValue,
      name,
      date,
      start_time,
      end_time,
      fee,
      start_comments,
      end_comments,
    } = this.props;
    return (
      <div>
        <form class="needs-validation" novalidate>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(event) => changeTopValue(event)}
              />
            </div>
            <div class="col-md-2 mb-3">
              <input
                type="text"
                class="form-control"
                id="date"
                name="date"
                placeholder="Date"
                value={date}
                onChange={(event) => changeTopValue(event)}
              />
            </div>
            <div class="col-md-2 mb-3">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="start_time"
                  name="start_time"
                  placeholder="Start Time"
                  value={start_time}
                  onChange={(event) => changeTopValue(event)}
                />
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="end_time"
                  name="end_time"
                  placeholder="End Time"
                  value={end_time}
                  onChange={(event) => changeTopValue(event)}
                />
              </div>
            </div>
            <div class="col-md-2 mb-3">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    $
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="fee"
                  name="fee"
                  placeholder="Fee"
                  value={fee}
                  onChange={(event) => changeTopValue(event)}
                />
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <input
                type="text"
                class="form-control"
                id="start_comments"
                name="start_comments"
                placeholder="Starting Comments"
                value={start_comments}
                onChange={(event) => changeTopValue(event)}
              />
            </div>
            <div class="col-md-6 mb-3">
              <input
                type="text"
                class="form-control"
                id="end_comments"
                name="end_comments"
                placeholder="Closing Comments"
                value={end_comments}
                onChange={(event) => changeTopValue(event)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteTop;
