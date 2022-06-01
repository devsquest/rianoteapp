import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { saveBasicUserData } from "../../services/authService";
import Form from "../common/form";

class BasicForm extends Form {
  state = {
    data: { email:"", first_name: "", last_name: "" },
    errors: {},
  };
  constructor(props) {
    super(props);
    this.LoadData = this.LoadData.bind(this);
  }
  schema = {
    email: Joi.string().required().email().label("Email"),
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
  };
  LoadData(event) {
    console.log(event);
  }
  doSubmit = async () => {
    try {
      const { data } = this.state;
      console.log(data);




      const { data:userData } = await saveBasicUserData(data.email, data.first_name, data.last_name);
      window.location = "/dashboard";
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
    const {user} = this.props;
    return (
      
      <div class="card-body">
      <form onSubmit={this.handleSubmit}>
        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label">
            Email
          </label>
          <div class="col-sm-9">
            {this.renderInput("email", "Email", this.email)}
            <input type="email" class="form-control" name="email" id="email" value={user.email} />
          </div>
        </div>
        <div class="form-group row">
          <label for="first_name" class="col-sm-3 col-form-label">
            First Name
          </label>
          <div class="col-sm-9">
            {this.renderInput("first_name", "First Name", this.email)}
            <input type="text" class="form-control" name="first_name" id="first_name" value={user.name} />
          </div>
        </div>
        <div class="form-group row">
          <label for="last_name" class="col-sm-3 col-form-label">
            Last Name
          </label>
          <div class="col-sm-9">
            {this.renderInput("last_name", "Last Name")}
            <input type="text" class="form-control" name="last_name" id="last_name"  value={user.name} />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9">
            <button type="submit" class="btn btn-success">
              Update Information
            </button>
          </div>
        </div>
      </form>
    </div>
     
    );
  }
}

export default BasicForm;
