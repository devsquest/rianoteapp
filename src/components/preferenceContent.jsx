import React from "react";

const PreferenceContent = () => {
  return (
      <div>
          <div className="b-b p-b-10">
            <h4>Terminology</h4>
            <p>Which terms do you prefer (current selections are highlighted)?</p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="client" autoComplete="off"/>
                    Client </label>
                <label className="btn btn-info">
                  <input type="radio" value="patient" autoComplete="off"/>
                    Patient </label>
                <label className="btn btn-info">
                  <input type="radio" value="person" autoComplete="off"/>
                    Person </label>
                <label className="btn btn-info">
                  <input type="radio" value="student" autoComplete="off"/>
                    Student </label>
                <label className="btn btn-info">
                  <input type="radio" value="youth" autoComplete="off"/>
                    Youth </label>
              </div>
            </div>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="psychodynamic" autoComplete="off"/>
                    psychodynamic </label>
                <label className="btn btn-info">
                  <input type="radio" value="psychoanalytic" autoComplete="off"/>
                    psychoanalytic </label>
              </div>
            </div>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-info">
                  <input type="radio" value="behavior" autoComplete="off"/>
                    behavior </label>
                <label className="btn btn-info">
                  <input type="radio" value="behavior" autoComplete="off"/>
                    behavior </label>
              </div>
            </div>
          </div>
          <div className="b-b p-b-10">
            <h4>Opening heading</h4>
            <p>Do you wish to include a heading "Session Note" or "Progress Note"?</p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="session" autoComplete="off"/>
                    Session Note </label>
                <label className="btn btn-info">
                  <input type="radio" value="progress" autoComplete="off"/>
                    Progress Note </label>
                <label className="btn btn-info">
                  <input type="radio" value="noheading" autoComplete="off"/>
                    No heading </label>
              </div>
            </div>
          </div>
          <div className="b-b p-b-10">
            <h4>Section Breaks</h4>
            <p>Do you wish to have paragraph breaks and/or headings between sections of your progress note?</p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="break" autoComplete="off"/>
                    no paragraph breaks </label>
                <label className="btn btn-info">
                  <input type="radio" value="pragraph" autoComplete="off"/>
                    paragraph breaks </label>
              </div>
            </div>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-info">
                  <input type="radio" value="noheading" autoComplete="off"/>
                    no section heading </label>
                <label className="btn btn-info">
                  <input type="radio" value="noheading" autoComplete="off"/>
                    section heading </label>
              </div>
            </div>
          </div>
          <div className="b-b p-b-10">
            <h4>Spacing Between Options</h4>
            <p>Set your spacing between Options:</p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="1" autoComplete="off"/>
                    1 </label>
                <label className="btn btn-info">
                  <input type="radio" value="2" autoComplete="off"/>
                    2 </label>
                <label className="btn btn-info">
                  <input type="radio" value="3" autoComplete="off"/>
                    3 </label>
                <label className="btn btn-info">
                  <input type="radio" value="4" autoComplete="off"/>
                    4 </label>
                <label className="btn btn-info">
                  <input type="radio" value="5" autoComplete="off"/>
                    5 </label>
              </div>
            </div>
          </div>
          <div className="b-b p-b-10">
            <h4>Printed-Note Font Style</h4>
            <p>Set your Printed-Note Font Style: </p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="Arial" autoComplete="off"/>
                    Arial </label>
                <label className="btn btn-info">
                  <input type="radio" value="Times" autoComplete="off"/>
                    Times </label>
                <label className="btn btn-info">
                  <input type="radio" value="Courier" autoComplete="off"/>
                    Courier </label>
              </div>
            </div>
          </div>
          <div className="b-b p-b-10">
            <h4>Printed-Note Font Size</h4>
            <p>Set your Printed-Note Font Size:</p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="12" autoComplete="off"/>
                    12 </label>
                <label className="btn btn-info">
                  <input type="radio" value="14" autoComplete="off"/>
                    14 </label>
                <label className="btn btn-info">
                  <input type="radio" value="16" autoComplete="off"/>
                    16 </label>
                <label className="btn btn-info">
                  <input type="radio" value="18" autoComplete="off"/>
                    18 </label>
                <label className="btn btn-info">
                  <input type="radio" value="20" autoComplete="off"/>
                    20 </label>
              </div>
            </div>
          </div>
          <div className="b-b p-b-10">
            <h4>Date Format</h4>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="23" autoComplete="off"/>
                    September 23, 1939 </label>
                <label className="btn btn-info">
                  <input type="radio" value="09" autoComplete="off"/>
                    09/23/1939 </label>
                <label className="btn btn-info">
                  <input type="radio" value="009" autoComplete="off"/>
                    23/09/1939 </label>
                <label className="btn btn-info">
                  <input type="radio" value="009" autoComplete="off"/>
                    1939-09-13 </label>
              </div>
            </div>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="sat" autoComplete="off"/>
                    Saturday, 23 September, 1939 </label>
                <label className="btn btn-info">
                  <input type="radio" value="sata" autoComplete="off"/>
                    Saturday, September 23, 1939 </label>
                <label className="btn btn-info">
                  <input type="radio" value="00223" autoComplete="off"/>
                    23 September, 1939 </label>
              </div>
            </div>
          </div>
          <div className="p-b-10">
            <h4>Color Opacity of Selected Statements</h4>
            <p>Set color opacity of selected statements:</p>
            <div className="row text-center preference-row m-b-5">
              <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-default">
                  <input type="radio" value="0.1" autoComplete="off"/>
                    0.1 </label>
                <label className="btn btn-info">
                  <input type="radio" value="0.3" autoComplete="off"/>
                    0.3 </label>
                <label className="btn btn-info">
                  <input type="radio" value="0.5" autoComplete="off"/>
                    0.5 </label>
                <label className="btn btn-info">
                  <input type="radio" value="0.7" autoComplete="off"/>
                    0.7 </label>
                <label className="btn btn-info">
                  <input type="radio" value="0.9" autoComplete="off"/> 0.9 </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceContent;
