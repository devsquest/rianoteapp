import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { login } from "../../services/authService";
import Form from "../common/form";
import { Link } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: authData } = await login(data.username, data.password);
      localStorage.setItem("token", authData.success.token);
      window.location = "/home";
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        //const errors = { ...this.state.errors };
        //errors.username = ex.response.data.error;
        //this.setState({ errors });
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
    return (
      <div>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <form onSubmit={this.handleSubmit}>
                <div className="card-body">
                  <h1 className="card-title text-center login-heading">
                    Ria Notes Designer
                  </h1>
                  <div className="sub-heading">
                    Write better notes and faster.
                  </div>
                  <div className="form-label-group">
                    {this.renderInput("username", "Username")}
                  </div>
                  <div className="form-label-group">
                    {this.renderInput("password", "Password", "password")}
                  </div>

                  {this.renderCheckbox(
                    "rememberme",
                    "Remember password",
                    "checkbox"
                  )}

                  {this.renderButton(
                    "Login",
                    "btn btn-lg btn-primary btn-block text-uppercase"
                  )}
                  <Link to="/">Forgot Password</Link>
                  <hr className="my-4" />
                  {this.renderButton(
                    "Purchase a copy of RIA NOTE DESIGNER",
                    "btn btn-lg btn-warning btn-block"
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
