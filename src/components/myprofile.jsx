import React from "react";
import TopNav from "./common/topnav";
import SideNav from "./common/sidenav";
import BasicForm from "./users/BasicForm";

const MyProfile = (props) => {
  const {user} = props;
  return (
    
    <main role="main" className="">
      <div class="card">
        <h5 class="card-header">Update Profile</h5>
        <BasicForm user={user} />
      </div>
      <div class="card my-5">
        <h5 class="card-header">Update Password</h5>
        <div class="card-body">
          <form>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label">
                Current Password
              </label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label">
                New Password
              </label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label">
                Confirm New Password
              </label>
              <div class="col-sm-9">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label"></label>
              <div class="col-sm-9">
                <button type="submit" class="btn btn-success">
                  Update Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="card my-5">
        <h5 class="card-header">Update Mailing Subscription</h5>
        <div class="card-body">
          <form>
            <div class="form-group row">
              <div class="col-sm-2">
                <button type="submit" class="btn btn-success">
                  Subscribe To Recieve Updates From Ria NoteDesigner
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  
  );
};

export default MyProfile;
