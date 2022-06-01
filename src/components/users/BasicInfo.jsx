import React, { Component } from "react";

const BasicInfo = ({ user }) => {
  //console.log(user[0]);
  return (

    <div class="basic-info my-5">
      <div class="row dashboard-card">
        <div class="col-4">
          <div class="card border-info mx-sm-1 p-3">
            <div class="card border-info shadow text-info px-2 my-card">
              <span aria-hidden="true">
                <b> Email</b>
              </span>
            </div>
            <div class="text-info mt-2">
              <p>{user.email}</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border-success mx-sm-1 p-3">
            <div class="card border-success shadow text-success px-2 my-card">
              <span aria-hidden="true">
                <b>Signature</b>
              </span>
            </div>
            <div class="text-success mt-2">
              <p>{user.name}</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border-danger mx-sm-1 p-3">
            <div class="card border-danger shadow text-danger px-2 my-card">
              <span aria-hidden="true">
                <b>Billing Information</b>
              </span>
            </div>
            <div class="text-danger">
              <button
                type="button"
                className="btn btn-danger my-2"
                data-toggle="modal"
                data-target="#responsive-modal"
              >
                Request to change signature
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#responsive-modal"
              >
                Get to temporary link Fastspring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
