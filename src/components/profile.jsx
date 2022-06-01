import React, { Component } from "react";
import Joi from 'joi-browser';
import { toast } from "react-toastify";
import { getUser } from "../services/authService";
import { saveBasicUserData } from "../services/authService";

class Profile extends Component {
  state = {
    userData: {id:"", email:"", name:"", password:"", npassword:"", cpassword:""},
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    name: Joi.string().required().label("Name"),
    password: Joi.string().label("Current Password"),
    npassword: Joi.string().label("New Password"),
    cpassword: Joi.string().label("Confirm Password"),
  };
  async componentDidMount() {
    try {
      const { userData } = this.state;
      const { data:user } = await getUser();
      userData.id = user.id;
      userData.name = user.name;
      userData.email = user.email;
      this.setState({ ...this.state, userData: user });
    } catch (ex) {
      if (ex.response && ex.response.status === 500) {
          toast.error("Please login to access application!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.userData, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //const errors = this.validate();
    //this.setState({ errors: errors || {} });
    //if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const userData = { ...this.state.userData };
    userData[input.name] = input.value;
    this.setState({ userData, errors });
  };

  doSubmit = async () => {
    try {
      const { userData } = this.state;
      const data = await saveBasicUserData(userData);
      if(data.status==200){
        toast.success("User information is updated successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        toast.error("Please provide valid credentials!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  render() {
    const { userData, error } = this.state;
    return (
        <div id="page-wrapper" className="dashboard-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="white-box">
                  <div className="card profile">
                    <div className="card-header">
                      <h5>Update My Profile</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label">Email:</label>
                          <div className="col-sm-8">
                            <input type="text"
                                   className="form-control"
                                   value = { (userData && userData[0] && userData[0].email)
                                       ? userData[0].email : ''
                                   }/>
                          </div>
                        </div>
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label">Name:</label>
                          <div className="col-sm-8">
                            <input className="form-control"
                                   // onChange={this.handleChange}
                                   defaultValue = { (userData && userData[0] && userData[0].name)
                                       ? userData[0].name : ''
                                   }
                            />
                            {error && <div className="alert alert-danger">{error}</div>}
                          </div>
                        </div>
                        {/*<div className="form-group row m-b-5">*/}
                        {/*  <label className="col-sm-4 col-form-label">Last name:</label>*/}
                        {/*  <div className="col-sm-8">*/}
                        {/*    <input className="form-control" onChange={this.handleChange}/>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label"/>
                          <div className="col-sm-8">
                            <button type={"submit"} className="btn btn-primary btn-sm">Update Information</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card profile">
                    <div className="card-header">
                      <h5>Update Password</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label">Current password:</label>
                          <div className="col-sm-8">
                            <input className="form-control" type="password"/>
                          </div>
                        </div>
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label">New password:</label>
                          <div className="col-sm-8">
                            <input className="form-control" type="password"/>
                          </div>
                        </div>
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label">Confirm new password:</label>
                          <div className="col-sm-8">
                            <input className="form-control" type="password"/>
                          </div>
                        </div>
                        <div className="form-group row m-b-5">
                          <label className="col-sm-4 col-form-label"></label>
                          <div className="col-sm-8">
                            <button type={"submit"} className="btn btn-primary btn-sm">Update Password</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card profile">
                    <div className="card-header">
                      <h5>Update Mailing Subscription</h5>
                    </div>
                    <div className="card-body">
                      <div className="form-group row m-b-5">
                        <div className="col-sm-12">
                          <button className="btn btn-primary btn-sm">Subscribe to receive updates from Ria Note</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer text-center"> 2021 &copy; Ria Note</footer>
        </div>
    );
  }
}
 
export default Profile;
    // <div className="col-lg-10 mt-2">
    //   <div className="card">
    //     <h5 className="card-header">Update Profile</h5>
    //
    //     <div className="card-body">
    //       <form onSubmit={this.handleSubmit}>
    //         <div className="form-group row">
    //           <label htmlFor="email" className="col-sm-3 col-form-label">
    //             Email
    //           </label>
    //           <div className="col-sm-9">
    //             <input type="email" className="form-control" onChange={this.handleChange} name="email" id="email"
    //                    defaultValue={userData.email}/>
    //           </div>
    //         </div>
    //         <div className="form-group row">
    //           <label htmlFor="name" className="col-sm-3 col-form-label">
    //             Name
    //           </label>
    //           <div className="col-sm-9">
    //             <input type="text" className="form-control" onChange={this.handleChange} name="name" id="name"
    //                    defaultValue={userData.name}/>
    //             {error && <div className="alert alert-danger">{error}</div>}
    //           </div>
    //         </div>
    //         <div className="form-group row">
    //           <label htmlFor="inputEmail3" className="col-sm-3 col-form-label"></label>
    //           <div className="col-sm-9">
    //             <button type="submit" className="btn btn-success">
    //               Update Information
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //
    //   </div>
    //   <div className="card my-5">
    //     <h5 className="card-header">Update Password</h5>
    //     <div className="card-body">
    //       <form onSubmit={this.handleSubmit}>
    //         <div className="form-group row">
    //           <label htmlFor="password" className="col-sm-3 col-form-label">
    //             Current Password
    //           </label>
    //           <div className="col-sm-9">
    //             <input type="password" onChange={this.handleChange} className="form-control" id="password"
    //                    name="password"/>
    //           </div>
    //         </div>
    //         <div className="form-group row">
    //           <label htmlFor="npassword" className="col-sm-3 col-form-label">
    //             New Password
    //           </label>
    //           <div className="col-sm-9">
    //             <input type="password" onChange={this.handleChange} className="form-control" id="npassword"
    //                    name="npassword"/>
    //           </div>
    //         </div>
    //         <div className="form-group row">
    //           <label htmlFor="cpassword" className="col-sm-3 col-form-label">
    //             Confirm New Password
    //           </label>
    //           <div className="col-sm-9">
    //             <input type="password" onChange={this.handleChange} className="form-control" id="cpassword"
    //                    name="cpassword"/>
    //           </div>
    //         </div>
    //         <div className="form-group row">
    //           <label htmlFor="inputEmail3" className="col-sm-3 col-form-label"></label>
    //           <div className="col-sm-9">
    //             <button type="submit" className="btn btn-success">
    //               Update Password
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="card my-5">
    //     <h5 className="card-header">Update Mailing Subscription</h5>
    //     <div className="card-body">
    //       <form>
    //         <div className="form-group row">
    //           <div className="col-sm-2">
    //             <button type="submit" className="btn btn-success">
    //               Subscribe To Recieve Updates From Ria NoteDesigner
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
