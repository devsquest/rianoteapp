import React, { Component } from "react";
class NoteArea extends Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    return (
      <dl
        class="dl-horizontal preview-content"
        id="preview-content"
        style={{
          width: "210mm",
          minHeight: "297mm",
          marginTop: 20,
          marginLeft: "10mm",
          marginRight: "10mm",
        }}
      >
        <dd>
          <b>Name: </b>
          {data.name != "" ? data.name : ""}
        </dd>
        <dd>
          <b>Date: </b>
          {data.date != "" ? data.date : ""}
        </dd>
        {data.start_time != "" ? (
          <>
            <dd>
              <b>Start At: </b>
              {data.start_time}
            </dd>
          </>
        ) : (
          ""
        )}
        {data.end_time != "" ? (
          <>
            <dd>
              <b>End At: </b>
              {data.end_time}
            </dd>
          </>
        ) : (
          ""
        )}
        {data.fee != "" ? (
          <>
            <dd>
              <b>Session Fee: </b>
              {data.fee}
            </dd>
          </>
        ) : (
          ""
        )}
        <dt>Session Note: </dt>
        <dd>
          {data.start_comments + " " + 
          data.content.map((con, index) => (
            con
          ))
           + " " + 
          data.end_comments}
        </dd>
        <br />
        <br />
        <hr />
        <dd>Sara Chuadari</dd>
        <dd>LCSW</dd>
        <br />
        <br />
        <br />
      </dl>
    );
  }
}

export default NoteArea;
